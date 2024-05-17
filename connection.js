// const mysql = require('mysql')

// const db = mysql.createConnection({
//     host: "127.0.0.1", 
//     user: "root", 
//     password: "", 
//     database: "app"
// })

// module.exports = db

const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST, // Gunakan environment variables untuk konfigurasi
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = db;
