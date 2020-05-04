const models = require("../../../models");

/**
 * lists all the topics that have been added to the watched list.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findAllWatchedTopics = async (req, res, next) => {
  try {
    const topics = await models.watched_topic.findAll({
      where: { courseId: req.params.courseId, userId: req.params.userId },
    });
    if (topics) {
      return res.status(200).json({
        message: "success",
        topics,
      });
    } else {
      return res.status(404).json({message : "no topic exist."});
    }
  } catch (error) {
    next(error);
  }
};
module.exports = exports = findAllWatchedTopics;
