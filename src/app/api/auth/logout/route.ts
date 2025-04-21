import { verifyToken } from "@/lib/auth";
import insertLog from "@/lib/log";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies();
  const { userId } = await verifyToken(
    cookieStore.get("token")?.value as string
  );
  cookieStore.delete("token");

  await insertLog({
    userId: (userId as string) || "",
    action: "READ",
    tableName: "USER",
    changes: JSON.stringify({
      message: "Success Logout user",
    }),
  });

  return NextResponse.json(
    { status: "success", message: "logout success" },
    { status: 200 }
  );
}
