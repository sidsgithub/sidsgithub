const models = require("../../models");
const logger = require("../../logger");


/**
 * creates a watched topic entry of a course for a user.
 * @param {Object} topicWatched - contains topics Watched value, userId, courseId, and topicId.
 */
const newWatchedTopic = async (topicWatched) => {
  try {
    const topic = await models.watched_topic.create(topicWatched);

    return {
      message : "success",
      topic,
    };
  } catch (error) {
    logger.error(error.name);
    next(error);
  }
};
module.exports = newWatchedTopic;