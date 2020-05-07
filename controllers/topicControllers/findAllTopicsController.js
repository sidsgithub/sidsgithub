const models = require("../../models");
const logger = require("../../logger");

/**
 * lists all the topics that belongs to a course.
 * @param {Integer} courseId - Course's Id.
 */
const findAllTopics = async (courseId) => {
  try {
    const topics = await models.topic.findAll({
      where: { courseId },
    });
    if (topics) {
      return {
        message: "success",
        topics,
      };
    } else {
      const msg = "no topic exist.";
      logger.warn("message : ",msg);
      return { message: msg };
    }
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = exports = findAllTopics;
