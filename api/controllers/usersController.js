const models = require("../models");
const bcrypt = require("bcrypt");
const { User } = models;

//In this file we will define are CRUD functionality for our users
const registerUser = {
  async register(req, res, next) {
    try {
      const { firstName, lastName, email, phone, address, password } = req.body;
      const hash = bcrypt.hashSync(password, 10);
      const user = User.create({
        firstName,
        lastName,
        email,
        phone,
        address,
        password: hash,
      });

      const { id } = user;
      return res.status(201).send({ user: { id, firstName, email } });
    } catch (e) {
      return next(new Error(e));
    }
  },
};

module.exports = registerUser;
