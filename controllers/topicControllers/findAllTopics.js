const models = require('../../models');

/**
 * lists all the topics that belongs to a course.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findAllTopics = async (req, res, next) => {
    try {
        const topics = await models.topic.findAll({
            where: { courseId: req.params.courseId },
          });
        if (topics) {
                    return res.status(200).json({
                        message: "success",
                        topics
                    });
        }
        else{
            return res.status(404).json({message : 'no topic exist.'});
        }
    } catch (error) {
        next(error);
    }
}
module.exports = exports = findAllTopics;