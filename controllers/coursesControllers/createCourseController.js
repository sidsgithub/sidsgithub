const models = require("../../models");
const logger = require("../../logger");

/**
 * creates a new course.
 * @param {Object} courseCreated - constains title, description and User's Id.
 */
const newCourse = async (courseCreated) => {
  try {
    const course = await models.course.create(courseCreated);
    
    return {
      message : "success",
      course,
    };
  } catch (error) {
    logger.error(error.name);
    throw new Error(error)
  }
};

module.exports = newCourse;
