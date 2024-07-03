import { env } from "@/env.mjs";
import { passportAuth } from "@blitzjs/auth";
import db from "db";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { api } from "src/blitz-server";

export default api(
  passportAuth({
    successRedirectUrl: "/",
    errorRedirectUrl: "/",
    strategies: [
      {
        // authenticateOptions: { scope: ["email", "profile"] },
        strategy: new GoogleStrategy(
          {
            clientID: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
            callbackURL:
              process.env.NODE_ENV === "production"
                ? "https://example.com/api/auth/google/callback"
                : "http://localhost:3000/api/auth/google/callback",
          },
          async function (_accessToken, _refreshToken, profile, done) {
            const email = profile.emails && profile.emails[0]?.value;

            if (!email) {
              return done(new Error("Google OAuth response doesn't have email."));
            }

            const user = await db.user.upsert({
              where: { email },
              create: {
                email,
                name: profile.displayName,
              },
              update: { email },
            });

            const publicData = {
              userId: user.id,
              roles: [user.role],
              source: "google",
            };
            done(undefined, { publicData });
          },
        ),
      },
    ],
  }),
);
