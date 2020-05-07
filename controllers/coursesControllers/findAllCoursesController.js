const models = require("../../models");
const logger = require("../../logger");

/**
 * list all the courses created.
 */
const findAllCourses = async () => {
  try {
    
    const courses = await models.course.findAll();

    if (courses) {
      return {
        message: "success",
        courses,
      };
    } else {
      const msg = "no course exist.";
      logger.warn("message : ", msg);
      return { message: msg };
    }
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    throw new Error(error)
  }
};
module.exports = exports = findAllCourses;
