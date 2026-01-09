import { Pool } from 'pg'

// Create connection pool
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// Helper function for queries
export async function query(text, params) {
  const start = Date.now()
  try {
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log('Executed query', { text, duration, rows: res.rowCount })
    return res
  } catch (error) {
    console.error('Database query error', { text, error: error.message })
    throw error
  }
}

// Test connection
export async function testConnection() {
  try {
    const result = await query('SELECT NOW()')
    return { connected: true, time: result.rows[0].now }
  } catch (error) {
    return { connected: false, error: error.message }
  }
}

