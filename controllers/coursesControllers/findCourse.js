const models = require("../../models");
const logger = require("../../logger");

/**
 * finds a course based on the courseId.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findCourse = async (req, res, next) => {
  try {
    logger.info(req.url);

    const course = await models.course.findOne({
      where: { id: req.params.courseId },
    });
    if (course) {
      return res.status(200).json({
        message: "success",
        course,
      });
    } else {
      const msg = "course does not exist";
      logger.warn("message : ", msg);
      return res.status(404).json({
        "message" : msg
      });
    }
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};
module.exports = exports = findCourse;
