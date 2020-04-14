const models = require("../models");

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
      return res.status(404).send("topic does not exist");
    }
  } catch (error) {
    next(error);
  }
};
module.exports = exports = findTopic;
