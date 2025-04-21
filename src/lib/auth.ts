import { AuthorizationError } from "@/exceptions/AuthorizationError";
import bcrypt from "bcryptjs";
import { jwtVerify, SignJWT } from "jose";
import { JWTExpired } from "jose/errors";
import { cookies } from "next/headers";

const key = new TextEncoder().encode(process.env.JWT_SECRET_KEY!);
const jwtExpired = process.env.JWT_EXPIRED!;

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export const verifyUser = async (password: string, hashedPassword: string) => {
  const matchedPassword = await bcrypt.compare(password, hashedPassword);
  return matchedPassword;
};

export const generateJwt = async (userId: string, role: string) => {
  const token = await new SignJWT({ userId, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(jwtExpired)
    .sign(key);
  return token;
};

export const verifyToken = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, key);
    return payload;
  } catch (err) {
    if (err instanceof JWTExpired) {
      throw new AuthorizationError("Expired Token");
    }
    throw new AuthorizationError("Invalid Token");
  }
};

export const verifyAccess = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value as string;
  const payload = await verifyToken(token);
  return payload;
};
