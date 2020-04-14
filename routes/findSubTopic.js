const models = require("../models");

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
      return res.status(404).send("sub_topic does not exist");
    }
  } catch (error) {
    next(error);
  }
};
module.exports = exports = findSubTopic;
