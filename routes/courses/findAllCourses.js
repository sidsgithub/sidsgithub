const models = require('../../models');

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