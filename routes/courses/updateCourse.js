const models = require("../../models");
const logger = require("../../logger");
const updateCourseController = require('../../controllers/coursesControllers/updateCourseController');
const globalResonseHandler = require('../../globalResonseHandler');
/**
 * updates the course title based on it's id.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const updateCourse = async (req, res, next) => {
  try {
    logger.info(req.url);
    const object = { title: req.body.title, courseId: req.params.courseId };
    const result  = await updateCourseController(object);
    globalResonseHandler(result, req, res, next);

  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};

module.exports = updateCourse;
