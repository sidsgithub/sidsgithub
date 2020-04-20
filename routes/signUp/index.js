const router = require('express').Router();

const createUser = require('./createUser');

router.post('/', createUser);

module.exports = router;
