const models = require("../models");

const { User } = models;

//In this file we will define are CRUD functionality for our users
const registerUser = {
  async register(req, res, next) {
    try {
      const { name, email, password, address, phone } = req.body;
      const hash = bcrypt.hashSync(password, 10);
      const user = User.create({ name, address, phone, password: hash });

      const { id } = user;
      return res.status(201).send({ user: { id, name, email } });
    } catch (e) {
      return next(new Error(e));
    }
  },
};

module.exports = registerUser;
