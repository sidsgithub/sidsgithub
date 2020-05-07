const models = require("../../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const logger = require("../../logger");

/**
 * SignUp : creates a user .
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const newUser = async (req, res, next) => {
  logger.info(req.url);

  const role = await models.role.findOne({
    where: { name: req.body.role },
  });

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, async function (err, hash) {
      try {
        const to_persist = {
          name: req.body.name,
          email: req.body.email,
          password: hash,
          profession: req.body.profession,
          roleId: role.id,
        };

        const user = await models.user.create(to_persist);

        return res.status(201).json({
          user,
        });
      } catch (error) {
        logger.error(req.url);
        logger.error(error.name);
        next(error);
      }
    });
  });
};

module.exports = newUser;
