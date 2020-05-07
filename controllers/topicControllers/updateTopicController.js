const models = require("../../models");
const logger = require("../../logger");


/**
 * updates a topic's title using it's id.
 * @param {Object} topicObject - contains the title to update and the topic's Id.
 */
const updateTopic = async (topicObject) => {
  try {
    await models.topic.update(
      { title: topicObject.title },
      { where: { id: topicObject.topicId } }
    );
    const result = await models.topic.findOne({ where: { id: topicObject.topicId } })
    return {
      message : "success",
      result
    }
      
  } catch (error) {
    logger.error(error.name);
    throw new Error(error);
  }
};

module.exports = updateTopic;
