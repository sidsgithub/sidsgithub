const models = require("../../models");

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
