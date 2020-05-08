const Joi = require('joi');
const logger = require('../logger');

const createCourseValidation = async (req, res, next) => {

    try {
      const schema = Joi.object().keys({
        title : Joi.string().required(),
      });
        await schema.validate(req.body);
        next();
    }
    catch (error) {
        logger.error(error.details[0].message);
        res.status(400).json({
            success: false,
            message:  error.details[0].message
        })
    }
}

module.exports = createCourseValidation;