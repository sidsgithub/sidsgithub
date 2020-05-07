const models = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const logger = require("../../logger");

/**
 * SignIn : Checks for user in the database.
 * @param {Object} signInObject - contains email and password of requested user.
 */
const findUserController = async (signInObject) => {
  try {
    const user = await models.user.findOne({
      where: { email: signInObject.email },
    });

    if (user) {
      const token = jwt.sign(user.id, process.env.JWT_SECRET);
      const hash = user.password;

      const result = await bcrypt.compare(signInObject.password, hash);

      if (result) {
        return {
          message: "success",
          roleId: user.roleId,
          userId: user.id,
          token,
        };
      } else {
        const msg = "password did not match.";
        logger.warn("message : ", msg);
        return {
          message: msg,
        };
      }
    } else {
      const msg = "user does not exist.";
      logger.warn("message : ", msg);
      return {
        message: msg,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = exports = findUserController;
