import { NextResponse } from "next/server";
import ClientError from "@/exceptions/ClientError";

export function handleApiError(error: unknown) {
  if (error instanceof ClientError) {
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    );
  }

  console.error("Unhandled error:", error);
  return NextResponse.json(
    { message: "Internal Server Error" },
    { status: 500 }
  );
}
