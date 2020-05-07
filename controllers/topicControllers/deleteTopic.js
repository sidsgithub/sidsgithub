const models = require("../../models");
const logger = require("../../logger");

/**
 * deletes a topic based on it's id.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const deleteTopic = async (req, res, next) => {
  try {
    logger.info(req.url);
    const topic = await models.topic.destroy(
      {
        where: { id: req.params.topicId }
      }
    );
    return res.status(201).json({
      topic,
    });
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error); 
  }
};

module.exports = deleteTopic;