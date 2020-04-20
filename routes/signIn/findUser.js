const models = require('../../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const findUser = async (req, res, next) => {
    try {
        const user = await models.user.findOne({
            where: { email: req.body.email },
        });
        if (user) {
            const token = jwt.sign(user.id, process.env.JWT_SECRET);
            const hash = user.password;
            bcrypt.compare(req.body.password, hash, function(err, result) {
                
                if(result){
                    return res.status(200).json({
                        message: "success",
                        roleId : user.roleId,
                        userId : user.id,
                        token,
                    });
                }
                else{
                    return res.status(404).send('password did not match');
                }
            });
        }
        else{
            return res.status(404).send('user does not exist');
        }
    } catch (error) {
        next(error);
    }
}
module.exports = exports = findUser