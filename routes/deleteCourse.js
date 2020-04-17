const models = require("../models");

const deleteCourse = async (req, res) => {
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
        return res.status(500).json({ error: error.message });
      }
};

module.exports = deleteCourse
;