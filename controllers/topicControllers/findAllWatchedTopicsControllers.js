const models = require("../../models");
const logger = require("../../logger");

/**
 * lists all the topics that have been added to the watched list.
 * @param {Object} topicObject - contains course's Id and user's Id.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findAllWatchedTopics = async (topicObject) => {
  try {
    
    const topics = await models.watched_topic.findAll({
      where: { courseId: topicObject.courseId, userId: topicObject.userId },
    });
    if (topics) {
      return {
        message: "success",
        topics,
      };
    } else {
      const msg = "no topic exist.";
      logger.warn("message : ",msg);
      return {message :msg};
    }
  } catch (error) {
   throw new Error(error);
  }
};
module.exports = exports = findAllWatchedTopics;
