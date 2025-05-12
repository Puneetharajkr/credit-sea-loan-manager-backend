const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(process.env.DATABASE_URL);

// This matches your actual DB schema
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS applications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      amount REAL NOT NULL,
      address TEXT NOT NULL,
      dob TEXT NOT NULL,
      pan TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;