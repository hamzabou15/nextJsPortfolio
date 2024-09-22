import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the requested URL exists, otherwise redirect to home
  const { pathname } = request.nextUrl;
  if (pathname !== '/' && pathname !== '/other-existing-path') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Specify the paths where middleware should be applied
export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'], // Apply middleware to all paths except certain ones
};
