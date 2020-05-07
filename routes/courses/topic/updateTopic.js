const logger = require("../../../logger");
const updateTopicController = require("../../../controllers/topicControllers/updateTopicController");
const globalResonseHandler = require("../../../globalResonseHandler");
/**
 * updates a topic's title using it's id.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const updateTopic = async (req, res, next) => {
  try {
    logger.info(req.url);
    const object = {
      title: req.body.title,
      topicId: req.params.topicId,
    };
    const result = await updateTopicController(object);
    globalResonseHandler(result, req, res, next);
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};

module.exports = updateTopic;
