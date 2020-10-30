const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const router = express.Router();

router.post("/register", (req, res) => {
  const credentials = req.body;

  if (credentials.email && credentials.password) {
    const hash = bcrypt.hashSync(credentials.password, 10);
    credentials.password = hash;
  } else {
    res
      .status(401)
      .json({ message: "Please be sure to provide a email and password." });
  }

  console.log(req.body);
  res.json(req.body);
});

router.get("/google", passport.authenticate("google", { scope: "profile" }));

module.exports = router;
