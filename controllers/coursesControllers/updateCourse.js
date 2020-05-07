const models = require("../../models");
const logger = require("../../logger");

/**
 * updates the course title based on it's id.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const updateCourse = async (req, res, next) => {
  try {
    logger.info(req.url);

    await models.course.update(
      { title: req.body.title },
      { where: { id: req.params.courseId } }
    );
    return res
      .status(200)
      .json(
        await models.course.findOne({ where: { id: req.params.courseId } })
      );
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};

module.exports = updateCourse;
