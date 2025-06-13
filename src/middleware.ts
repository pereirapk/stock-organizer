import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/dashboard", "/profile"];
const publicRoutes = ["/login", "/signup"];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const cookie = await cookies();
  const token = cookie.get("token");
  console.log(token)
  if(isProtectedRoute && token) {
    return NextResponse.next();
  }
  if(isPublicRoute) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", req.url))
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};