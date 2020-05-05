const models = require("../../models");
/**
 * list a particular sub_topic details.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findSubTopic = async (req, res, next) => {
  try {
    const sub_topic = await models.sub_topic.findOne({
      where: { id: req.params.subtopicId },
    });
    if (sub_topic) {
      return res.status(200).json({
        message: "success",
        sub_topic,
      });
    } else {
      return res.status(404).json({ message: "sub_topic does not exist" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = exports = findSubTopic;
