const models = require("../models");

const newTitle = async (req, res) => {
      try {
        
        const title = await models.course.create(req.body);
        
        return res.status(201).json({
          title,
        });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};

module.exports = newTitle;
