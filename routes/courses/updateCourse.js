const models = require("../../models");

/**
 * updates the course title based on it's id.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
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
