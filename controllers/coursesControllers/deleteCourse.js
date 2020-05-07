const models = require("../../models");
const logger = require("../../logger");

/**
 * deletes a new course.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const deleteCourse = async (req, res, next) => {
    
  logger.info(req.url);

  try {
    const course = await models.course.destroy({
      where: { id: req.params.courseId },
    });
    return res.status(201).json({
      course,
    });
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);

    next(error);
  }
};

module.exports = deleteCourse;
