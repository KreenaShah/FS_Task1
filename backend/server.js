// const cors = require("cors");
// // const bodyParser = require("body-parser");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("./auth");

const app = express();

// app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/google/failure",
  })
);

app.get("/protected", isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

// app.get("/logout", (req, res) => {
//     req.session = null;
//   req.logout();
//   res.send("Goodbye!");
// });

app.get("/auth/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

app.listen(5000, () => console.log("listening on port: 5000"));
