import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const pathAuth = [
    "/sign-in",
    "/sign-up",
    "/api/auth/login",
    "/api/auth/register",
  ];
  const token = request.cookies.get("token")?.value;
  const isAuthPageUrl = pathAuth.includes(path);

  try {
    if (token && isAuthPageUrl) {
      const { role } = await verifyToken(token);

      if (role) {
        return NextResponse.redirect(new URL("/group-tasks", request.url));
      }
    }

    if (token && !isAuthPageUrl) {
      await verifyToken(token);
    }

    if (!isAuthPageUrl && !token && path !== "/") {
      throw new Error("Token Not Found");
    }

    return NextResponse.next();
  } catch (error) {
    console.log("middleware error:", error);
    if (!isAuthPageUrl) {
      const res = NextResponse.redirect(new URL("/sign-in", request.url));
      res.cookies.delete("token");
      return res;
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|js|css|ico)$).*)",
    "/sign-in",
    "/sign-up",
    "/group-tasks",
  ],
};
