const express = require("express");
const passport = require("passport");
const { register } = require("../api/controllers/usersController");

const router = express.Router();

router.post("/register", register);
router.get("/google", passport.authenticate("google", { scope: "profile" }));

module.exports = router;
