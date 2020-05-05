const models = require("../../models");

/**
 * finds a course based on the courseId.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findCourse = async (req, res, next) => {
  try {
    const course = await models.course.findOne({
      where: { id: req.params.courseId },
    });
    if (course) {
      return res.status(200).json({
        message: "success",
        course,
      });
    } else {
      return res.status(404).send("course does not exist");
    }
  } catch (error) {
    next(error);
  }
};
module.exports = exports = findCourse;
