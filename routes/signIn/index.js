const router = require('express').Router();

const findUser = require('./findUser');

router.post('/', findUser);

module.exports= router;
