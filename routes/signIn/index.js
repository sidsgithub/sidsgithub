const router = require('express').Router();

const findUser = require('../../controllers/signinController/findUser');

router.post('/', findUser);

module.exports= router;
