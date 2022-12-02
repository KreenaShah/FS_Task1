const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "978820508780-4ik3ba7u6d5q19v2trnjg8g9jqo2gn3a.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5000/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
