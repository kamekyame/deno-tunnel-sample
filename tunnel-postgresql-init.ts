import { Pool } from "npm:pg";

const pool = new Pool();

const createTableResult = await pool.query(`CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT now()
    );`);
console.log("Table created:", createTableResult);

const insertRowsResult = await pool.query(
  `INSERT INTO users (name, email) VALUES ($1, $2), ($3, $4)`,
  [
    "Test User",
    "test@example.com",
    "Admin User",
    "admin@example.com",
  ],
);
console.log("Inserted rows:", insertRowsResult);
