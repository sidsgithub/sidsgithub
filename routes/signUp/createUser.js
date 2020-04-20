const models = require("../../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const newUser = async (req, res) => {

  const role = await models.role.findOne({
    where: { name : req.body.role },
  });

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, async function (err, hash) {
      try {
        const to_persist = {
          name: req.body.name,
          email: req.body.email,
          password: hash,
          profession: req.body.profession,
          roleId : role.id
        };

        const user = await models.user.create(to_persist);
        
        return res.status(201).json({
          user,
        });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    });
  });
};

module.exports = newUser;
