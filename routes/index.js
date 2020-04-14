const express = require('express');
const router = express.Router();

const findUser = require('./findUser');
const createUser = require('./createUser');
// const getRole = require('./getRole');
const createCourse = require('./createCourse')

router.post('/users',findUser);
router.post('/createusers',createUser);
// router.post('/role',getRole);
router.post('/createcourse',createCourse)

module.exports = router;