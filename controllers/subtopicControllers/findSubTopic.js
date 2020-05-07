const models = require("../../models");
const logger = require("../../logger");

/**
 * list a particular sub_topic details.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findSubTopic = async (req, res, next) => {
  try {

    logger.info(req.url);

    const sub_topic = await models.sub_topic.findOne({
      where: { id: req.params.subtopicId },
    });
    if (sub_topic) {
      return res.status(200).json({
        message: "success",
        sub_topic,
      });
    } else {
      const msg = "sub_topic does not exist";
      logger.warn("message : ", msg);
      return res.status(404).json({ message: msg });
    }
  } catch (error) {

    logger.error(req.url);
    logger.error(error.name);
    
    next(error);
  }
};
module.exports = exports = findSubTopic;
