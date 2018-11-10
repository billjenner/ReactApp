
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        // console.log('accessToken', accessToken);
        // console.log('refreshToken', refreshToken);
        // console.log('profile', profile);

        // To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    // we aready hav a recorde with the given profile ID
                    done(null, existingUser);
                } else {
                    // make a new record
                    new User({ gooleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });
    })
);

