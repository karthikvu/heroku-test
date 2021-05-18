const { db } = require('../lib/database')

const getAll = () => db.any(`SELECT * from public.users`)

module.exports = {
    getAll
}