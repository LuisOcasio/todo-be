import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import passport from "passport";
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { Client } = require("pg");

dotenv.config();
const server = express();

server.use(helmet());
server.use(cors());

const port = process.env.PORT;

const client = new Client({
  user: process.env.RDS_USERNAME,
  host: process.env.RDS_HOSTNAME,
  database: process.env.RDS_DATABASE,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
});

client
  .connect()
  .then(() => console.log("Database is connected"))
  .catch((err) => console.error("connection error", err.stack));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  done(null, user.id);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/google/callback",
    },
    (accessToken) => {
      console.log("access token: ", accessToken);
    }
  )
);

server.use(passport.initialize());

server.get("/google", passport.authenticate("google", { scope: "profile" }));

server.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    // res.redirect("/");
    res.end("logged in");
  }
);

server.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
