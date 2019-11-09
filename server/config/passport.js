const mongoose = require('mongoose'),
      LocalStrategy = require('passport-local').Strategy,
      bcrypt = require('bcryptjs'),
      passport = require('passport'),
      User = require('../models/users.server.model');

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
                        console.log( 'Matched user in database' );
                        return done( null, user );
                    } else {
                        console.log( 'Password incorrect' );
                        return done( null, false, { message: 'Password incorrect' } )
                    }
                });
            })
        })
    );

// used by passport to communicate to and from a session
passport.serializeUser( (user, done ) => {
    done( null, user.id );
});

passport.deserializeUser( ( id, done ) => {
    User.findById( id, ( err, user ) => {
        done( err, user );
    });
});
