const models = require("../../models");
const logger = require("../../logger");
const deleteCourseController = require('../../controllers/coursesControllers/deleteCourseController')
const globalResonseHandler = require('../../globalResonseHandler');

/**
 * deletes a new course.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const deleteCourse = async (req, res, next) => {
    try{
      logger.info(req.url);
      const result = await deleteCourseController(req.params.courseId)
      globalResonseHandler(result,req,res,next)
    }
    catch(error){
      next(error);
    }
  
};

module.exports = deleteCourse;
