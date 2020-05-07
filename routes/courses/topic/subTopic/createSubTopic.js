const logger = require("../../../../logger");
const createSubTopicController = require("../../../../controllers/subtopicControllers/createSubTopicController");
const globalResonseHandler = require("../../../../globalResonseHandler");
/**
 * creates a new sub-topic.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const newSubTopic = async (req, res, next) => {
  try {
    logger.info(req.url);

    var topicId = JSON.parse(req.params.topicId);
    const sub_topicCreated = {
      title: req.body.title,
      topicId: topicId,
      url: req.body.url,
    };

    const result = await createSubTopicController(sub_topicCreated);
    globalResonseHandler(result, req, res, next);
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};

module.exports = newSubTopic;
