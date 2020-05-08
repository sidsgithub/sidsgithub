const router = require('express').Router({mergeParams: true});

const createSubTopic = require('./createSubTopic');
const findAllSubTopics = require('./findAllSubTopics');
const findSubTopic = require('./findSubTopic');

const createSubtopicValidation = require('../../../../validationMiddleware/createTopicValidation');


router.post('/',createSubtopicValidation,createSubTopic);//creates a subtopic
router.get('/',findAllSubTopics);//list all topics under a topic
router.get('/:subtopicId',findSubTopic);//select a topic

module.exports = router;