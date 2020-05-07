const logger = require("../../../logger");
const findAllTopicsController = require("../../../controllers/topicControllers/findAllTopicsController")
const globalResonseHandler = require('../../../globalResonseHandler');

/**
 * lists all the topics that belongs to a course.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findAllTopics = async (req, res, next) => {
  try {
    logger.info(req.url);
    const result = await findAllTopicsController(req.params.courseId);
    globalResonseHandler(result,req,res,next)
    
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};
module.exports = exports = findAllTopics;
