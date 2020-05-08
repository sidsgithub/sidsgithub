const logger = require("../../logger");
const findAllWatchedTopicsController = require('../../controllers/topicControllers/findAllWatchedTopicsControllers');
const globalResonseHandler = require('../../globalResonseHandler');

/**
 * lists all the topics that have been added to the watched list.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findAllWatchedTopics = async (req, res, next) => {
  try {
    logger.info(req.url);
    const object = { courseId: req.params.courseId, userId: req.params.userId };
    const result = await findAllWatchedTopicsController(object);
    globalResonseHandler(result, req, res, next);

  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};
module.exports = exports = findAllWatchedTopics;
