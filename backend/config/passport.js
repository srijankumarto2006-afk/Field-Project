const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/api/auth/google/callback" 
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const email = profile.emails[0].value;
                // Get image from either the photos array or the _json shortcut
                const googlePicture = profile.photos && profile.photos[0] ? profile.photos[0].value : profile._json.picture;

                let user = await User.findOne({ email });

                if (!user) {
                    // Create brand new user
                    user = await User.create({
                        name: profile.displayName,
                        email,
                        password: null, 
                        googleId: profile.id,
                        picture: googlePicture,
                        provider: "google"
                    });
                } else {
                    // ✅ THE FIX: If user already exists, update their picture in the database!
                    user.picture = googlePicture;
                    if (!user.googleId) user.googleId = profile.id; // Link googleId if missing
                    await user.save();
                }

                return done(null, user);
            } catch (err) {
                return done(err, null);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

module.exports = passport;