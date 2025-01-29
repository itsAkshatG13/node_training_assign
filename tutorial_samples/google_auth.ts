// import express from "express";
// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";

// const app = express();

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: "YOUR_GOOGLE_CLIENT_ID",
//       clientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
//       callbackURL: "/auth/google/callback",
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log("User Profile:", profile);
//       done(null, profile);
//     }
//   )
// );

// app.use(passport.initialize());

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { session: false }),
//   (req, res) => {
//     res.send("Authentication successful!");
//   }
// );

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));