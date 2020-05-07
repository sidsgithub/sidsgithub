const models = require("../../models");
const logger = require("../../logger");

 /**
 * find a topic based on it's id.
 * @param {Integer} topicId - topic's Id.
 */
const findTopic = async (topicId) => {
  try {
    const topic = await models.topic.findOne({
      where: { id: topicId },
    });
    if (topic) {
      return {
        message: "success",
        topic,
      };
    } else {
      const msg = "topic does not exist";
      logger.warn(msg);
      return { message: msg };
    }
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = exports = findTopic;
