const { Pool, Client } = require('pg')
const pgconnection = new Pool({
  host: process.env.PG_HOST,
  user:process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  charset:process.env.PG_CHARSET,
  port: process.env.PG_PORT
});

module.exports = pgconnection;
