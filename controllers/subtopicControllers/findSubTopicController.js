const models = require("../../models");
const logger = require("../../logger");

/**
 * list a particular sub_topic details.
 * @param {Integer} subtopicId - subtopic's Id.
 */
const findSubTopic = async (subtopicId) => {
  try {
    const sub_topic = await models.sub_topic.findOne({
      where: { id: subtopicId },
    });
    if (sub_topic) {
      return {
        message: "success",
        sub_topic,
      };
    } else {
      const msg = "sub_topic does not exist";
      logger.warn("message : ", msg);
      return { message: msg };
    }
  } catch (error) {
    logger.error(error.name);
    throw new Error(error);
  }
};
module.exports = exports = findSubTopic;
