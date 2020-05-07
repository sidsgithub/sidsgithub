const logger = require("../../../logger");
const markTopicWatchedController = require("../../../controllers/topicControllers/markTopicWatchedController");
const globalResonseHandler = require("../../../globalResonseHandler");
/**
 * creates a watched topic entry of a course for a user.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const newWatchedTopic = async (req, res, next) => {
  try {
    var topicId = JSON.parse(req.params.topicId);
    var courseId = JSON.parse(req.params.courseId);
    var userId = JSON.parse(req.params.userId);

    const topicWatched = {
      watched: req.body.watched,
      userId: userId,
      courseId: courseId,
      topicId: topicId,
    };

    logger.info(req.url);
    const result = await markTopicWatchedController(topicWatched);
    globalResonseHandler(result, req, res, next);
    
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};
module.exports = newWatchedTopic;
