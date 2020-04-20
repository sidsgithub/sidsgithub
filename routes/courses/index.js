const router = require('express').Router({mergeParams: true});

const createCourse = require('./createCourse');
const findAllCourses = require('./findAllCourses');
const findCourse = require('./findCourse');
const deleteCourse = require('./deleteCourse');
const updateCourse = require('./updateCourse');

const topic = require('./topic');
const findAllWatchedTopics = require('./topic/findAllWatchedTopics');


router.post('/', createCourse);//user creates a course with uID
router.get('/',findAllCourses);//all the courses of the course table listed
router.get('/:courseId',findCourse);//clicks on course 
router.put('/:courseId',deleteCourse);
router.put('/:courseId/update',updateCourse);
router.use('/:courseId/topic', topic); // topic routes
router.get('/:courseId/watched', findAllWatchedTopics);

module.exports = router;