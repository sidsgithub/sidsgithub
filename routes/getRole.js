const models = require("../models");
const getRole = async (req, res) => {
    
    try {
        const role = await models.role.findOne({
            where: { name : req.body.name },
        });
        return res.json(role.id);
    }
    catch (error) {
        next(error);
    }
}
module.exports = exports= getRole;

