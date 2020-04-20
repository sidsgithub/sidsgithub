const models = require("../../models");

const deleteCourse = async (req, res, next) => {
    console.log(req.params.courseId)
      try {
        const course = await models.course.destroy(
            {
                where : { id: req.params.courseId }
            }
        );
        return res.status(201).json({
            course,
        });
      } catch (error) {
       next(error);
      }
};

module.exports = deleteCourse
;