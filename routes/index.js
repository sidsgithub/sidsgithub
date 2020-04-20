const express = require('express');
const router = express.Router();

const signUp = require('./signUp/index');
const signIn = require('./signIn/index');
const courses = require('./courses');

router.use('/createusers',signUp);
router.use('/users',signIn);
router.use('/users/:userId/course',courses);

module.exports = router;