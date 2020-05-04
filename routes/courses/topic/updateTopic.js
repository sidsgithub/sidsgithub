const models = require("../../../models");


/**
 * updates a topic's title using it's id.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
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
