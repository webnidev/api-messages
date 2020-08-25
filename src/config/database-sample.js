const { Pool } = require('pg')

module.exports = new Pool({
    user: "postgres",
    password:"senha-do-banco",
    host:"localhost",
    port:5432,
    database:"nome-do-banco"
})