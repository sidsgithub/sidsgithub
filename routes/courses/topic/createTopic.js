const models = require("../../../models");

const newTopic = async (req, res, next) => {
  var courseid = JSON.parse(req.params.courseId);
  const topicCreated = {
    "title": req.body.title,
    "courseId": courseid
  }
  try {
    const topic = await models.topic.create(topicCreated);
    return res.status(201).json({
      topic,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = newTopic;
