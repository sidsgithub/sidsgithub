const models = require("../../models");

/**
 * creates a topic using it's title.
 * @param {Object} topicObject - contains course's title and Id.
 */

const newTopic = async (topicObject) => {
  try {
    const topic = await models.topic.create(topicObject);
    return {
      message: "success",
      topic,
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = newTopic;
