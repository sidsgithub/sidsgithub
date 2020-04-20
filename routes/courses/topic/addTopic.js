const models = require("../../../models");

const newTitle = async (req, res, next) => {
  try {
    const title = await models.course.create(req.body);
    return res.status(201).json({
      title,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = newTitle;
