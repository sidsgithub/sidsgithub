const router = require('express').Router();

const findUser = require('./findUser');
const signInValidation = require('../../validationMiddleware/signInValidation')

router.post('/',signInValidation,findUser);

module.exports= router;
