const logger = require("../../logger");
const createUserController = require("../../controllers/signupController/createUserController")
const globalResponseHandler = require("../../globalResonseHandler");
/**
 * SignUp : creates a user .
 * @param {Object} req - request recieved by the api.
 * @param {Object} res - message and the code generated as a response.
 * @param {function} next - provided by express, handles errors.
 */
const newUser = async (req, res, next) => {
  try {

    logger.info(req.url);

    const object = {
      name:req.body.name,
      email: req.body.email,
      password: req.body.password,
      profession : req.body.profession,
      role : req.body.role
    };

    const result = await createUserController(object);
    globalResponseHandler(result,req,res,next);
    
  } catch (error) {
    next(error);
  }

};

module.exports = newUser;
