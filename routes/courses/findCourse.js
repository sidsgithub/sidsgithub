const models = require("../../models");
const logger = require("../../logger");
const findAllCoursesController = require('../../controllers/coursesControllers/findAllCoursesController')

/**
 * finds a course based on the courseId.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findCourse = async (req, res, next) => {
  try {
    logger.info(req.url);
    const courseId = req.params.courseId;
    findAllCoursesController(courseId);

  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};
module.exports = exports = findCourse;
