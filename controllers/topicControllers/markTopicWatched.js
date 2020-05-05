const models = require("../../models");


/**
 * creates a watched topic entry of a course for a user.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const newWatchedTopic = async (req, res, next) => {
  try {
    var topicId = JSON.parse(req.params.topicId);
    var courseId = JSON.parse(req.params.courseId);
    var userId = JSON.parse(req.params.userId);

    const topicWatched = {
      watched: req.body.watched,
      userId: userId,
      courseId: courseId,
      topicId: topicId,
    };
    console.log(topicWatched);

    const topic = await models.watched_topic.create(topicWatched);

    return res.status(201).json({
      topic,
    });
  } catch (error) {}
};
module.exports = newWatchedTopic;