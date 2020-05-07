const Joi = require('joi');
const logger = require('../log');

const signUpValidation = async (req, res, next) => {

    try {
      const schema = Joi.object().keys({
        name : Joi.string().required(),
        email : Joi.string().required(),
        password : Joi.string().required(),
        profession : Joi.string().optional(),
        role : Joi.string().required(),
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

module.exports = signUpValidation;