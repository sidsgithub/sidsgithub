const models = require('../models');

const findAllWatchedTopics = async (req, res, next) => {
    try {
        const topics = await models.watched_topic.findAll({
            where: { courseId: req.params.courseId },
          });
        if (topics) {
                    return res.status(200).json({
                        message: "success",
                        topics
                    });
        }
        else{
            return res.status(404).send('no topic exist.');
        }
    } catch (error) {
        next(error);
    }
}
module.exports = exports = findAllWatchedTopics;