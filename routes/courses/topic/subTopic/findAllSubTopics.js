const logger = require("../../../../logger");
const findAllSubTopicsController = require("../../../../controllers/subtopicControllers/findAllSubTopicsController");
const globalResonseHandler = require("../../../../globalResonseHandler");

/**
 * lists all the subtopics for a topic.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findAllSubTopics = async (req, res, next) => {
  try {
    logger.info(req.url);
    const result = await findAllSubTopicsController(req.params.topicId);
    globalResonseHandler(result, req, res, next);
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};
module.exports = exports = findAllSubTopics;
