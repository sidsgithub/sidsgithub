const models = require("../../models");


/**
 * deletes a topic based on it's id.
 * @param {Integer} topicId - topic's Id.
 */
const deleteTopic = async (topicId) => {
  try {
    const topic = await models.topic.destroy(
      {
        where: { id: topicId }
      }
    );
    return {
      message : "success",
      topic,
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = deleteTopic;