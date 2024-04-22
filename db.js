const { Pool } = require('pg')

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'test',
	password: '122295122295Marx45',
	port: 5432, // порт, который использует PostgreSQL (по умолчанию 5432)
})

module.exports = pool
