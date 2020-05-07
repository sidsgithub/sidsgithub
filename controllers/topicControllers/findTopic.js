const models = require("../../models");
const logger = require("../../logger");

 /**
 * find a topic based on it's id.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findTopic = async (req, res, next) => {
  try {
    logger.info(req.url);
    const topic = await models.topic.findOne({
      where: { id: req.params.topicId },
    });
    if (topic) {
      return res.status(200).json({
        message: "success",
        topic,
      });
    } else {
      const msg = "topic does not exist";
      logger.warn(msg);
      return res.status(404).json({ message: msg });
    }
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};
module.exports = exports = findTopic;
