var express = require('express');
const { getAll } = require('../models/users');
var router = express.Router();

// /* GET users listing. */
router.get('/', async function(req, res, next) {
    const users = await getAll()
    res.json(users)
});

module.exports = router;
