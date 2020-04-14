const models = require("../models");

const newCourse = async (req, res) => {
  const courseCreated = {
      "title":req.body.title,
      "description":req.body.description,
      "userCreatedId": req.body.userCreatedId
  }
      try {
        
        const course = await models.course.create(courseCreated);
        
        return res.status(201).json({
          course,
        });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};

module.exports = newCourse;
