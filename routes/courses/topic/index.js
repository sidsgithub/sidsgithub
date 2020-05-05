const router = require('express').Router({mergeParams: true});

const createTopic = require('../../../controllers/topicControllers/createTopic');
const findAllTopics = require('../../../controllers/topicControllers/findAllTopics');
const findTopic = require('../../../controllers/topicControllers/findTopic');
const deleteTopic = require('../../../controllers/topicControllers/deleteTopic');
const updateTopic = require('../../../controllers/topicControllers/updateTopic');
const subTopic = require('./subTopic');
const markTopicWatched = require('../../../controllers/topicControllers/markTopicWatched');

router.post('/',createTopic);//creates a topic
router.get('',findAllTopics);//list all topics under a course under the course with the specified courseId.
router.get('/:topicId',findTopic);//select a topic
router.put('/:topicId',deleteTopic);
router.put('/:topicId/update',updateTopic);

router.use('/:topicId/sub-topic', subTopic); //subTopic routes

router.put('/:topicId/watched',markTopicWatched)//mark the topic watched.

module.exports = router;
