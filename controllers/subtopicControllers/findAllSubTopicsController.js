const models = require("../../models");
const logger = require("../../logger");

/**
 * lists all the subtopics for a topic.
 * @param {Integer} topicId - topic's Id.
 */
const findAllSubTopics = async (topicId) => {
  try {
    const sub_topics = await models.sub_topic.findAll({
      where: { topicId},
    });
    if (sub_topics) {
      return {
        message: "success",
        sub_topics,
      };
    } else {
      const msg = "no sub_topic exist.";
      logger.warn("message : ",msg);
      return { message: msg };
    }
  } catch (error) {
    logger.error(error.name);
    throw new ErrorEvent(error);
  }
};
module.exports = exports = findAllSubTopics;
