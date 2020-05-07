const models = require("../../models");
const logger = require("../../logger");

/**
 * lists all the topics that have been added to the watched list.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findAllWatchedTopics = async (req, res, next) => {
  try {
    logger.info(req.url);
    const topics = await models.watched_topic.findAll({
      where: { courseId: req.params.courseId, userId: req.params.userId },
    });
    if (topics) {
      return res.status(200).json({
        message: "success",
        topics,
      });
    } else {
      const msg = "no topic exist.";
      logger.warn("message : ",msg);
      return res.status(404).json({message :msg});
    }
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};
module.exports = exports = findAllWatchedTopics;
