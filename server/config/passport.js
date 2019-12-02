const mongoose = require('mongoose'),
      LocalStrategy = require('passport-local').Strategy,
      bcrypt = require('bcryptjs'),
      passport = require('passport'),
      GoogleStrategy = require('passport-google-oauth20'),
      keys = require('./config'),
      User = require('../models/user.server.model');




// passport database verification
passport.use(new LocalStrategy({
    usernameField: 'username'}, (email, password, done) => {

        // check for email in database
        User.findOne( {email: email}, (err, user) => {
            if (err) {
                return done(err);
            }

            if (!user) {
                console.log('Email not registered');
                return done(null, false, {message: 'Email not registered'});
            }

            // match decrypted password
            bcrypt.compare( password, user.password, ( err, isMatch ) => {
                if ( err ) throw err;

                if ( isMatch ) {
                    // returns user from the database
                    console.log( 'Matched user in database, logging in' );
                    //console.log(user);
                    return done( null, user );
                } else {
                    //console.log( 'Password incorrect' );
                    return done( null, false, { message: 'Password incorrect' } )
                }
            });
        })
    })
);




// google authentication
passport.use(new GoogleStrategy({

    // options
    callbackURL: '/user/dashboard',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, () => {
    // callback
}))



// used by passport to communicate to and from a session
passport.serializeUser( (user, done ) => {
    done( null, user );
});

passport.deserializeUser( ( user, done ) => {
        done( null, user );
});
