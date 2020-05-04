const models = require('../../models');


/**
 * list all the courses created.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findAllCourses = async (req, res, next) => {
    try {
        const courses = await models.course.findAll();
        if (courses) {
            return res.status(200).json({
                message: "success",
                courses
            });
        }
        else {
            return res.status(404).send('no course exist.');
        }
    } catch (error) {
        next(error);
    }
}
module.exports = exports = findAllCourses