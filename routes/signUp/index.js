const router = require('express').Router();

const createUser = require('../../controllers/signupController/createUser');

router.post('/', createUser);

module.exports = router;
