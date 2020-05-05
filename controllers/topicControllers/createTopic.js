const models = require("../../models");

/**
 * creates a topic using it's title.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */

const newTopic = async (req, res, next) => {

  var courseid = JSON.parse(req.params.courseId);

  const schema = Joi.object().keys({
    title : Joi.string().required()
  });

  const { value, error } = Joi.validate(req.body, schema);
  if (error && error.details) {
    return res.status(400).json({
      message: error,
    });
  }

  const topicCreated = {
    "title": req.body.title,
    "courseId": courseid
  }

  try {
    const topic = await models.topic.create(topicCreated);
    return res.status(201).json({
      topic,
    });
  } catch (error) {
    next(error);
  }

};

module.exports = newTopic;
