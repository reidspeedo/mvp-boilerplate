-- Initial schema
-- Customize this based on your MVP blueprint

-- Users table (remove if not using auth)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Example: Add your MVP-specific tables here
-- CREATE TABLE IF NOT EXISTS rooms (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255) UNIQUE NOT NULL,
--   created_at TIMESTAMP DEFAULT NOW()
-- );

-- CREATE TABLE IF NOT EXISTS bookings (
--   id SERIAL PRIMARY KEY,
--   room_id INTEGER REFERENCES rooms(id),
--   start_time TIMESTAMP NOT NULL,
--   end_time TIMESTAMP NOT NULL,
--   session_id VARCHAR(255),
--   created_at TIMESTAMP DEFAULT NOW()
-- );

-- Indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
-- CREATE INDEX IF NOT EXISTS idx_bookings_room_id ON bookings(room_id);
-- CREATE INDEX IF NOT EXISTS idx_bookings_start_time ON bookings(start_time);


