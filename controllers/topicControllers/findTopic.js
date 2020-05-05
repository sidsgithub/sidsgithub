const models = require("../../models");

 /**
 * find a topic based on it's id.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findTopic = async (req, res, next) => {
  try {
    const topic = await models.topic.findOne({
      where: { id: req.params.topicId },
    });
    if (topic) {
      return res.status(200).json({
        message: "success",
        topic,
      });
    } else {
      return res.status(404).json({ message: "topic does not exist" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = exports = findTopic;
