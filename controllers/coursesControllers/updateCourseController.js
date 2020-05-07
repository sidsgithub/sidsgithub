const models = require("../../models");


/**
 * updates the course title based on it's id.
 * @param {Object} courseObject - contains courseId and Title to update the course.
 */
const updateCourse = async (courseObject) => {
  try {
   
    await models.course.update(
      { title: courseObject.title },
      { where: { id: courseObject.courseId } }
    );
    
    const result = await models.course.findOne({ where: { id: courseObject.courseId } });
    return {
      message : "success",
      result
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = updateCourse;
