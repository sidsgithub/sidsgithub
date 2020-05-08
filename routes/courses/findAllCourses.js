const logger = require("../../logger");
const findAllCoursesController = require("../../controllers/coursesControllers/findAllCoursesController");
const globalResonseHandler = require('../../globalResonseHandler');
/**
 * list all the courses created.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findAllCourses = async (req, res, next) => {
  try {
    logger.info(req.url);
    const result = await findAllCoursesController();
    globalResonseHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};
module.exports = exports = findAllCourses;
