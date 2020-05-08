const Joi = require('joi');
const logger = require('../logger');

const signInValidation = async (req, res, next) => {

    try {
      const schema = Joi.object().keys({
        email : Joi.string().email().required(),
        password : Joi.string().min(3).max(30).required()
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

module.exports = signInValidation;