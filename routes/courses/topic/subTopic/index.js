const router = require('express').Router({mergeParams: true});

const createSubTopic = require('../../../../controllers/subtopicControllers/createSubTopic');
const findAllSubTopics = require('../../../../controllers/subtopicControllers/findAllSubTopics');
const findSubTopic = require('../../../../controllers/subtopicControllers/findSubTopic');

router.post('/',createSubTopic);//creates a subtopic
router.get('/',findAllSubTopics);//list all topics under a topic
router.get('/:subtopicId',findSubTopic);//select a topic

module.exports = router;