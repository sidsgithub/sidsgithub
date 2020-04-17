const models = require("../models");

const deleteTopic = async (req, res) => {
    console.log(req.params.topicId)
      try {
        const topic = await models.topic.destroy(
            {
                where : { id: req.params.topicId }
            }
        );
        return res.status(201).json({
            topic,
        });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};

module.exports = deleteTopic;