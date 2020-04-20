const models = require("../../models");

const newCourse = async (req, res, next) => {
  var userid = JSON.parse(req.params.userId);
  const courseCreated = {
      "title":req.body.title,
      "description":req.body.description,
      "userId": userid
  }
      try {
        const course = await models.course.create(courseCreated);
        
        return res.status(201).json({
          course,
        });
      } catch (error) {
        next(error);
      }
};

module.exports = newCourse;
