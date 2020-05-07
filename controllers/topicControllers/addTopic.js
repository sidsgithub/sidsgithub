const models = require("../../models");
const Joi = require("joi");
const logger = require("../../logger");

/**
 * Adds new title to the list of titles in courses.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const newTitle = async (req, res, next) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
  });

  const { value, error } = Joi.validate(req.body, schema);

  if (error && error.details) {
    logger.error(error.name);

    return res.status(400).json({
      message: error,
    });
  }

  try {
    logger.info(req.url);
    const title = await models.course.create(req.body);
    return res.status(201).json({
      title,
    });
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};

module.exports = newTitle;
