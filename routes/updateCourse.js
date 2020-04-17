const models = require("../models");

const updateCourse = async (req, res) => {
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
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateCourse;
