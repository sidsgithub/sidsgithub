const models = require("../../models");
const logger = require("../../logger");

/**
 * finds a course based on the courseId.
 * @param {Object} courseId - course's Id.
 */
const findCourse = async (courseId) => {
  try {
    logger.info(req.url);

    const course = await models.course.findOne({
      where: { id: courseId},
    });
    if (course) {
      return {
        message: "success",
        course,
      };
    } else {
      const msg = "course does not exist";
      logger.warn("message : ", msg);
      return {
        "message" : msg
      };
    }
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    throw new Error(error)
  }
};
module.exports = exports = findCourse;
