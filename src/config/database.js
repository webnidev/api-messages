const { Pool } = require('pg')

module.exports = new Pool({
    user: "postgres",
    password:"123123",
    host:"localhost",
    port:5400,
    database:"thefy_api"
})