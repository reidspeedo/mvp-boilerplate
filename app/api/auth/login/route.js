import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { comparePassword, signToken } from '@/lib/auth'

/**
 * Login endpoint
 * Remove this file if not using authentication
 */
export async function POST(request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Find user
    const result = await query(
      'SELECT id, email, password_hash, name FROM users WHERE email = $1',
      [email]
    )

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const user = result.rows[0]

    // Verify password
    const valid = await comparePassword(password, user.password_hash)
    if (!valid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Generate token
    const token = signToken({ userId: user.id, email: user.email })

    // Set cookie
    const response = NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name },
      token,
    })

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
}


