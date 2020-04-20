const models = require("../../../models");

const updateTopic = async (req, res, next) => {
  console.log(req.params.topicId);
  console.log(req.body.title);

  try {
    await models.topic.update(
      { title: req.body.title },
      { where: { id: req.params.topicId } }
    );
    return res.json(
      await models.topic.findOne({ where: { id: req.params.topicId } })
    );
  } catch (error) {
    next(error);
  }
};

module.exports = updateTopic;
