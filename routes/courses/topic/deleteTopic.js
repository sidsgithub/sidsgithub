const models = require("../../../models");

const deleteTopic = async (req, res, next) => {
  console.log(req.params.topicId)
  try {
    const topic = await models.topic.destroy(
      {
        where: { id: req.params.topicId }
      }
    );
    return res.status(201).json({
      topic,
    });
  } catch (error) {
    next(error); ƒ
  }
};

module.exports = deleteTopic;