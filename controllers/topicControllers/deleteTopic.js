const models = require("../../models");

/**
 * deletes a topic based on it's id.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
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