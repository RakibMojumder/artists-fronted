import { NextRequest, NextResponse } from "next/server";

const middleware = async (request: NextRequest) => {
  const path = request.nextUrl.pathname;
  const token = request.cookies?.get("token")?.value || "";

  const securePath = ["/add-project", "/add-review"];

  if (!token && securePath.includes(path)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
};

export const config = {
  matcher: ["/add-project", "/add-review"],
};

export default middleware;
