import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Liste des chemins valides que tu veux autoriser
  const validPaths = ['/', '/about', '/contact', '/estimate', '/services', '/works'];

  // Rediriger vers la page d'accueil si le chemin n'est pas valide
  if (!validPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|logo.png|assets/|imgs/).*)',
};
