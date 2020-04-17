const models = require("../models");

const newWatchedTopic = async (req, res) => {
  var topicId = JSON.parse(req.params.topicId); 
  var courseId = JSON.parse(req.params.courseId);
  var userId = JSON.parse(req.params.userId);
  

  const topicWatched = {
      "watched" : req.body.watched,
      "userId" : userId,
      "courseId": courseId,
      "topicId" : topicId
  }
  console.log(topicWatched)
      try {
        
        const topic = await models.watched_topic.create(topicWatched);
        
        return res.status(201).json({
          topic,
        });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};

module.exports = newWatchedTopic;
