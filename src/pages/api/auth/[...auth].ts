import { env } from "@/env.mjs";
import { passportAuth } from "@blitzjs/auth";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { api } from "src/blitz-server";

const googleStrategy = new GoogleStrategy(
  {
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback",
    scope: ["profile", "email"],
  },
  (accessToken, refreshToken, profile, done) => {
    // Implement your custom logic to handle the Google authentication
    // This is where you can create or update the user in your database
    // and return the user object
    const user = {
      id: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
    };
    return done(null, user);
  },
);

export default api(
  passportAuth({
    successRedirectUrl: "/",
    errorRedirectUrl: "/",
    strategies: [
      {
        strategy: googleStrategy, // Provide initialized passport strategy here
      },
    ],
  }),
);
