const Joi = require("joi");
const models = require("../../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

/**
 * SignUp : creates a user .
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const newUser = async (req, res,next) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    profession: Joi.string().optional(),
    role: Joi.string().required(),
  });

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

        const { value, error } = Joi.validate(req.body, schema);

        if (error && error.details) {
          return res.status(400).json({
            message: error,
          });
        }

        return res.status(201).json({
          user,
        });

      } catch (error) {
        next(error)
      }
    });
  });
};

module.exports = newUser;
