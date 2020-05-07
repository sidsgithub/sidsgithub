const models = require("../../models");
const logger = require('../../logger');
const createCourseController = require('../../controllers/coursesControllers/createCourseController')
const globalResonseHandler = require('../../globalResonseHandler');
/**
 * creates a new course.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const newCourse = async (req, res, next) => {

  logger.info(req.url);

  var userid = JSON.parse(req.params.userId);
try{

  const courseCreated = {
      "title":req.body.title,
      "description":req.body.description,
      "userId": userid
  }

  const result = await createCourseController(courseCreated);
  globalResonseHandler(result,req,res,next)
}
catch(error){
  next(error);
}

};

module.exports = newCourse;
