const models = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const logger = require('../../logger');

/**
 * SignIn : Checks for user in the database.
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const findUser = async (req, res, next) => {

  logger.info(req.url);

  const schema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  try {
    const user = await models.user.findOne({
      where: { email: req.body.email },
    });
    if (user) {
      const token = jwt.sign(user.id, process.env.JWT_SECRET);
      const hash = user.password;
      const { value, error } = Joi.validate(req.body, schema);
      if (error && error.details) {
        return res.status(400).json({
          message: error,
        });
      } else {
        bcrypt.compare(req.body.password, hash, function (err, result) {
          if (result) {
            return res.status(200).json({
              message: "success",
              roleId: user.roleId,
              userId: user.id,
              token,
            });
          } else {
            const msg = "password did not match.";
            logger.warn("message : ",msg);
            return res.status(404).json({
              message: msg,
            });
          }
        });
      }
    } else {
      const msg = "user does not exist.";
      logger.warn("message : ",msg);
      return res.status(404).json({
        message: msg,
      });
    }
  } catch (error) {
    logger.error(req.url);
    logger.error(error.name);
    next(error);
  }
};

module.exports = exports = findUser;
