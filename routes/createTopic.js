const models = require("../models");

const newTopic = async (req, res) => {
  var courseid = JSON.parse(req.params.courseId);
  const topicCreated = {
      "title":req.body.title,
      "courseId": courseid
  }
      try {
        
        const topic = await models.topic.create(topicCreated);
        
        return res.status(201).json({
          topic,
        });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};

module.exports = newTopic;
