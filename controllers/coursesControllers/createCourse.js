const models = require("../../models");
const logger = require('../../logger');

/**
 * creates a new course.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const newCourse = async (req, res, next) => {

  logger.info(req.url);

  var userid = JSON.parse(req.params.userId);
  const courseCreated = {
      "title":req.body.title,
      "description":req.body.description,
      "userId": userid
  }
      try {
        const course = await models.course.create(courseCreated);
        
        return res.status(201).json({
          course,
        });
      } catch (error) {
        logger.error(req.url);
        logger.error(error.name);
        next(error);
      }
};

module.exports = newCourse;
