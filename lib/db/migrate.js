/**
 * Simple migration runner
 * Place SQL files in prisma/migrations/ with format: 001_initial.sql, 002_add_users.sql, etc.
 */
import { readdir, readFile } from 'fs/promises'
import { join } from 'path'
import { query, pool } from '../db.js'

async function runMigrations() {
  try {
    // Create migrations table if it doesn't exist
    await query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        version VARCHAR(255) PRIMARY KEY,
        applied_at TIMESTAMP DEFAULT NOW()
      )
    `)

    // Get all migration files
    const migrationsDir = join(process.cwd(), 'prisma', 'migrations')
    const files = await readdir(migrationsDir)
    const sqlFiles = files
      .filter(f => f.endsWith('.sql'))
      .sort()

    // Get already applied migrations
    const applied = await query('SELECT version FROM schema_migrations')
    const appliedVersions = new Set(applied.rows.map(r => r.version))

    // Run new migrations
    for (const file of sqlFiles) {
      const version = file.replace('.sql', '')
      if (appliedVersions.has(version)) {
        console.log(`✓ Migration ${version} already applied`)
        continue
      }

      console.log(`Running migration ${version}...`)
      const sql = await readFile(join(migrationsDir, file), 'utf-8')
      
      // Run in transaction
      const client = await pool.connect()
      try {
        await client.query('BEGIN')
        await client.query(sql)
        await client.query('INSERT INTO schema_migrations (version) VALUES ($1)', [version])
        await client.query('COMMIT')
        console.log(`✓ Migration ${version} applied`)
      } catch (error) {
        await client.query('ROLLBACK')
        throw error
      } finally {
        client.release()
      }
    }

    console.log('All migrations complete')
  } catch (error) {
    console.error('Migration error:', error)
    process.exit(1)
  } finally {
    await pool.end()
  }
}

runMigrations()


