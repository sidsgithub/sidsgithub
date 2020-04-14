const express = require('express');
const router = express.Router();

const findUser = require('./findUser');
const createUser = require('./createUser');
const createCourse = require('./createCourse')
const findAllCourses = require('./findAllCourses');
const findCourse = require('./findCourse');
const createTopic = require('./createTopic');
const findAllTopics = require('./findAllTopics');
const findTopic = require('./findTopic');
const createSubTopic = require('./createSubTopic');
const findAllSubTopics = require('./findAllSubTopics');
const findSubTopic = require('./findSubTopic');

router.post('/createusers',createUser);
router.post('/users',findUser);//finding users based on email.(user signs In)

router.post('/users/:userId/course',createCourse);//user creates a course with uID
router.get('/users/:userId/course',findAllCourses);//all the courses of the course table listed
router.get('/users/:userId/course/:courseId',findCourse);//clicks on course 

router.post('/users/:userId/course/:courseId/topic',createTopic);//creates a topic
router.get('/users/:userId/course/:courseId/topic',findAllTopics);//list all topics under a course under the course with the specified courseId.
router.get('/users/:userId/course/:courseId/topic/:topicId',findTopic);//select a topic

router.post('/users/:userId/course/:courseId/topic/:topicId/sub-topic',createSubTopic);//creates a subtopic
router.get('/users/:userId/course/:courseId/topic/:topicId/sub-topic',findAllSubTopics);//list all topics under a topic
router.get('/users/:userId/course/:courseId/topic/:topicId/sub-topic/:subtopicId',findSubTopic);//select a topic

module.exports = router;