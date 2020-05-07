const logger = require("../../../logger");
const findTopicController = require("../../../controllers/topicControllers/findTopicController")
const globalResonseHandler = require('../../../globalResonseHandler');

 /**
 * find a topic based on it's id.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findTopic = async (req, res, next) => {
  try {
    logger.info(req.url);
    const result = await findTopicController(req.params.topicId);
    globalResonseHandler(result,req,res,next)
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};
module.exports = exports = findTopic;
