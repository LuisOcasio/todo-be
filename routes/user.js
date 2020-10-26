import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/", (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

router.get("/google", passport.authenticate("google", { scope: "profile" }));

export default router;
