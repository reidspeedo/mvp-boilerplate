/**
 * Utility functions
 */

/**
 * Validate email format
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Generate a random string
 */
export function randomString(length = 32) {
  return Array.from(crypto.getRandomValues(new Uint8Array(length)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

/**
 * Format error for API response
 */
export function formatError(error) {
  return {
    error: error.message || 'An error occurred',
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  }
}


