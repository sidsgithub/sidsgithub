const logger = require("../../../logger");
const createTopicController = require('../../../controllers/topicControllers/createTopicController');
const globalResonseHandler = require('../../../globalResonseHandler');
/**
 * creates a topic using it's title.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */

const newTopic = async (req, res, next) => {
  try {
    logger.info(req.url);

    const topicCreated = {
      title: req.body.title,
      courseId: JSON.parse(req.params.courseId)
    };

    const result = await createTopicController(topicCreated);
    globalResonseHandler(result,req,res,next);


  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};

module.exports = newTopic;
