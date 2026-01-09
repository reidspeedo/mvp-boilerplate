/**
 * Database seeding script
 * Place seed SQL in prisma/seeds.sql or customize this file
 */
import { readFile } from 'fs/promises'
import { join } from 'path'
import { query, pool } from '../db.js'

async function seed() {
  try {
    console.log('Seeding database...')
    
    // Example: Seed initial data
    // You can customize this or load from prisma/seeds.sql
    
    // Example users (remove if not using auth)
    // await query(`
    //   INSERT INTO users (email, password_hash, name) VALUES
    //   ('admin@example.com', '$2a$10$...', 'Admin User')
    //   ON CONFLICT (email) DO NOTHING
    // `)
    
    console.log('✓ Database seeded')
  } catch (error) {
    console.error('Seed error:', error)
    process.exit(1)
  } finally {
    await pool.end()
  }
}

seed()



