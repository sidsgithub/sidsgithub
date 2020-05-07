const logger = require("../../../../logger");
const findSubTopicController = require("../../../../controllers/subtopicControllers/findSubTopicController");
const globalResonseHandler = require("../../../../globalResonseHandler");

/**
 * list a particular sub_topic details.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findSubTopic = async (req, res, next) => {
  try {
    logger.info(req.url);
    const result = await findSubTopicController(req.params.subtopicId);
    globalResonseHandler(result, req, res, next);
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};
module.exports = exports = findSubTopic;
