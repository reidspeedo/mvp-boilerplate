import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const JWT_SECRET = process.env.JWT_SECRET || 'change-me'

/**
 * Sign a JWT token
 */
export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

/**
 * Verify a JWT token
 */
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

/**
 * Hash a password
 */
export async function hashPassword(password) {
  return bcrypt.hash(password, 10)
}

/**
 * Compare password with hash
 */
export async function comparePassword(password, hash) {
  return bcrypt.compare(password, hash)
}

/**
 * Get token from request (cookie or header)
 */
export function getTokenFromRequest(request) {
  // Try cookie first
  const cookieHeader = request.headers.get('cookie')
  if (cookieHeader) {
    const cookies = Object.fromEntries(
      cookieHeader.split('; ').map(c => c.split('='))
    )
    if (cookies.token) return cookies.token
  }
  
  // Try Authorization header
  const authHeader = request.headers.get('authorization')
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.substring(7)
  }
  
  return null
}


