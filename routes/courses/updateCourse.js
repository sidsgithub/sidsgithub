const models = require("../../models");

const updateCourse = async (req, res, next) => {
  console.log(req.params.courseId);
  console.log(req.body.title);

  try {
    await models.course.update(
      { title: req.body.title },
      { where: { id: req.params.courseId } }
    );
    return res.json(
      await models.course.findOne({ where: { id: req.params.courseId } })
    );
  } catch (error) {
    next(error);
  }
};

module.exports = updateCourse;
