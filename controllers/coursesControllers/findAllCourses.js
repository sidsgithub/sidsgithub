const models = require("../../models");
const logger = require("../../logger");

/**
 * list all the courses created.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findAllCourses = async (req, res, next) => {
  try {
    logger.info(req.url);

    const courses = await models.course.findAll();

    if (courses) {
      return res.status(200).json({
        message: "success",
        courses,
      });
    } else {
      const msg = "no course exist.";
      logger.warn("message : ", msg);
      return res.status(404).json({ message: msg });
    }
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};
module.exports = exports = findAllCourses;
