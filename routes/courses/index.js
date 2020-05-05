const router = require('express').Router({mergeParams: true});

const createCourse = require('../../controllers/coursesControllers/createCourse');
const findAllCourses = require('../../controllers/coursesControllers/findAllCourses');
const findCourse = require('../../controllers/coursesControllers/findCourse');
const deleteCourse = require('../../controllers/coursesControllers/deleteCourse');
const updateCourse = require('../../controllers/coursesControllers/updateCourse');

const topic = require('./topic');
const findAllWatchedTopics = require('../../controllers/topicControllers/findAllWatchedTopics');


router.post('/', createCourse);//user creates a course with uID
router.get('/',findAllCourses);//all the courses of the course table listed
router.get('/:courseId',findCourse);//clicks on course 
router.put('/:courseId',deleteCourse);
router.put('/:courseId/update',updateCourse);
router.use('/:courseId/topic', topic); // topic routes
router.get('/:courseId/watched', findAllWatchedTopics);

module.exports = router;