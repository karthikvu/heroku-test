const pgpOptions = {}

const pgp = require('pg-promise')(pgpOptions)

console.log(process.env.DATABASE_URL)
const connectionString = process.env.DATABASE_URL
const db = pgp(connectionString)
// console.log(db)

module.exports = { db, connectionString }