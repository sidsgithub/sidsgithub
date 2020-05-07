const models = require("../../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const logger = require("../../logger");

/**
 * SignUp : creates a user .
 * @param {Object} signUpObject - contains name, email, password, profession and role of the requested user.
 */
const newUser = async (signUpObject) => {
  const role = await models.role.findOne({
    where: { name: signUpObject.role },
  });

  const salt = bcrypt.genSaltSync(saltRounds);
  const hashed = bcrypt.hashSync(signUpObject.password, salt);

  const to_persist = {
    name: signUpObject.name,
    email: signUpObject.email,
    password: hashed,
    profession: signUpObject.profession,
    roleId: role.id,
  };
  const user = await models.user.create(to_persist);

  return {
    message: "success",
    user,
  };
};

module.exports = newUser;
