const models = require('../../models');

/**
 * lists all the subtopics for a topic.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findAllSubTopics = async (req, res, next) => {
    try {
        const sub_topics = await models.sub_topic.findAll({
            where: { topicId: req.params.topicId },
        });
        if (sub_topics) {
            return res.status(200).json({
                message: "success",
                sub_topics
            });
        }
        else {
            return res.status(404).json(
                {message:'no sub_topic exist.'}
            )
        }
    } catch (error) {
        next(error);
    }
}
module.exports = exports = findAllSubTopics;