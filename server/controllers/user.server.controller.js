const User = require('../models/user.server.model.js'),
      passport = require('passport'),
      { check, validationResult } = require('express-validator'),
      bcrypt = require('bcryptjs'),
      saltRounds = 10;



/* user login */
exports.login = (req, res, next) => {

    passport.authenticate('local', (err, user) => {

        if (err) { return next(err) }
        if (!user) {
            res.status(409).send('Bad Request');
        }
        else {
            req.login(user, (err) => {

                if (err) { 
                    return next(err); 
                }

                console.log('User logging in: ', req.session)
                console.log('User ID: ', req.session.passport.user._id)
                return res.status(200).json(user)
            });
        }
    })
    (req, res, next); 
};



/* user logout */
exports.logout = (req, res) => {

    req.logout();
    req.session.destroy();
    res.send('OK');
};




/* Create a user */
exports.register = (req, res) => {

    // grab data from request
    const {name, email, password, password_confirm} = req.body; // add passwords back into here

    // TODO finish validation
    //const checks = [ check(email).isEmail(), 
    //    check(name).isLength({ min: 3 }), 
    //    check(password).isLength({ min: 6 }) ]; 

    //const errors = validationResult(checks);

    //if (!errors.isEmpty()) {
    //    return res.status(422).json({ errors: errors.array() });
    //}

    // validation passed, verify user not in database, then save
    User.findOne({email: email})
    .then(user => {
        if (user) {
            // user exists
            console.log("User already exists")
            res.status(409).send('Bad Request')
        } else {
            // add user to database and ENCRYPT password
            var new_user = User(req.body);
            //console.log(new_user)

            // HASH password
            bcrypt.genSalt(saltRounds, (err, salt) => { 
                bcrypt.hash(new_user.password, salt, (err, hash) => {
                    if (err) throw err;

                    // set password to hash
                    new_user.password = hash;
                    console.log("attempting to save the user")

                    // save the user
                    new_user.save()
                        .then(user => {
                            res.send('User created');
                        })
                        .catch(err => console.log(err))
                })
            })
        }
    })
};



/* get user */
exports.user = (req, res) => {

    /* send back the user as json from the request */
   // console.log(res.user);
    res.send('User info');
};




/* Update a user - note the order in which this function is called by the router*/
exports.update = (req, res) => {

    /* Instantiate a User that is within the database */
    console.log('User info in database', req.session.passport.user)

    if (req.user) {

        // TODO this.user_auth(req) // try to complete to save code duplication

        // grab data from request
        const {email, username, password, password_confirm} = req.body; // add passwords back into here
        // if password was given to be updated, hash it
        //var current_user = Object.assign(req.user);
        //var updated_user = Object.assign(req.);

        // TODO fix validation
        // check passwords are the same if a password was included
        // if (password!==undefined && (password != password_confirm)) {
        //     console.log('password do not match')
        //     res.status(400).send();
        // }
        // // check pass length if a password was included in the update 
        // else if (password!==undefined && (password.length < 6)) {
        //     console.log('passwords needs to be at least 6 characters')
        //     res.status(400).send();
        // }
        // else {
        // validation passed, verify email is not database

        User.findOne({email: email})
            .then(user => {
                if (user && (username === '')) {

                    // user exists and they are only updating their email
                    console.log("User already exists, try a new email")
                    res.status(409).send('Bad Request')
                //} 
                //else if (updated_user.password !== '') {
                //    bcrypt.genSalt(saltRounds, (err, salt) => { 
                //        bcrypt.hash(updated_user.password, salt, (err, hash) => {
                //            if (err) throw err;

                //            // set password to hash
                //            updated_user.password = hash;
                //            // update user within database based on parameters
                //            User.updateOne(user, updated_user, (err) => {
                //                if (err) {
                //                    throw err;
                //                } else {
                //                    //console.log('User updated')
                //                    res.send('Updated user with new hash')
                //                }
                //            })
                //        })
                //    })
                } else {
                    var new_email = email;
                    // update user within database based on parameters
                    User.updateOne(req.session.passport.user, {email: new_email}, (err) => {
                        if (err) { 
                            throw err; 
                        } else {

                            //console.log('User updated')
                            res.send('Updated user') // only used for testing...not actually looking in database for the change
                        }
                    })
                }
            })
            .catch(err => console.log(err))
    } 
    else {
        console.log('User does not exist in database...')
    }
};




/* Delete a user */
exports.delete = (req, res) => {

    if (req.user)
    {
        User.deleteOne(req.user, (err) => {
            if (err) {
                throw err;
            }
            else
                //console.log("User deleted");
                res.send('Deleted');
        })
    }
};
