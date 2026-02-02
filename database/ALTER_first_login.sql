-- Add first_login tracking to users table
ALTER TABLE users ADD COLUMN is_first_login BOOLEAN DEFAULT TRUE;
ALTER TABLE users ADD COLUMN status ENUM('ACTIVE', 'INACTIVE') DEFAULT 'ACTIVE';

-- Index for status queries
CREATE INDEX idx_status ON users(status);
