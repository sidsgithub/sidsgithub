const models = require("../../models");
const logger = require("../../logger");

/**
 * lists all the subtopics for a topic.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findAllSubTopics = async (req, res, next) => {
  try {
    logger.info(req.url);

    const sub_topics = await models.sub_topic.findAll({
      where: { topicId: req.params.topicId },
    });
    if (sub_topics) {
      return res.status(200).json({
        message: "success",
        sub_topics,
      });
    } else {
      const msg = "no sub_topic exist.";
      logger.warn("message : ",msg);
      return res.status(404).json({ message: msg });
    }
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};
module.exports = exports = findAllSubTopics;
