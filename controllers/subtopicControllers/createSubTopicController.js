const models = require("../../models");
const logger = require("../../logger");

/**
 * creates a new sub-topic.
 * @param {Object} sub_topicObject - contains the title and subtopic Id.
 */
const newSubTopic = async (sub_topicObject) => {
  
  try {

    const sub_topic = await models.sub_topic.create(sub_topicObject);

    return {
      message:"success",
      sub_topic,
    };
  } catch (error) {
    logger.error(error.name);
    throw new ErrorEvent(error);
  }
};

module.exports = newSubTopic;
