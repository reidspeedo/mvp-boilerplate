import { NextResponse } from 'next/server'
import { verifyToken, getTokenFromRequest } from './lib/auth'

/**
 * Middleware for protecting routes
 * Remove this file if not using authentication
 * 
 * To protect a route, add it to the matcher config below
 */
export function middleware(request) {
  // Example: protect /dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = getTokenFromRequest(request)
    
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    const payload = verifyToken(token)
    if (!payload) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // Add user info to request headers for API routes
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-user-id', payload.userId)
    requestHeaders.set('x-user-email', payload.email)

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  return NextResponse.next()
}

// Configure which routes to protect
export const config = {
  matcher: [
    '/dashboard/:path*',
    // Add more protected routes here
  ],
}

