const models = require("../../models");

/**
 * deletes a new course.
 * @param {Integer} courseId - course's Id.
 */
const deleteCourse = async (courseId) => {
    
  try {
    const course = await models.course.destroy({
      where: { id: courseId },
    });
    return {
      message : "success",
      course,
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = deleteCourse;
