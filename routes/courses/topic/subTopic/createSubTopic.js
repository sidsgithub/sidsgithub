const models = require("../../../../models");

/**
 * creates a new sub-topic.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const newSubTopic = async (req, res, next) => {
  var topicId = JSON.parse(req.params.topicId);
  const sub_topicCreated = {
      "title":req.body.title,
      "topicId": topicId,
      "url":req.body.url
  }
      try {
        
        const sub_topic = await models.sub_topic.create(sub_topicCreated);
        
        return res.status(201).json({
            sub_topic,
        });
      } catch (error) {
        next(error);
      }
};

module.exports = newSubTopic;
