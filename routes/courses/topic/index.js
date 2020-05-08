const router = require('express').Router({mergeParams: true});

const createTopic = require('./createTopic');
const findAllTopics = require('./findAllTopics');
const findTopic = require('./findTopic');
const deleteTopic = require('./deleteTopic');
const updateTopic = require('./updateTopic');
const subTopic = require('./subTopic');
const markTopicWatched = require('./markTopicWatched');

const updateTopicValidation = require('../../../validationMiddleware/updateTopicValidation');
const createTopicValidation = require('../../../validationMiddleware/createTopicValidation');

router.post('/',createTopicValidation,createTopic);//creates a topic
router.get('',findAllTopics);//list all topics under a course under the course with the specified courseId.
router.get('/:topicId',findTopic);//select a topic
router.put('/:topicId',deleteTopic);
router.put('/:topicId/update',updateTopicValidation,updateTopic);

router.use('/:topicId/sub-topic', subTopic); //subTopic routes

router.put('/:topicId/watched',markTopicWatched)//mark the topic watched.

module.exports = router;
