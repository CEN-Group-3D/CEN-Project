const User = require('../models/user.server.model.js'),
      passport = require('passport'),
      { check, validationResult } = require('express-validator'),
      _ = require('underscore'),
      bcrypt = require('bcryptjs'),
      saltRounds = 10;



/* user login */
exports.login = (req, res, next) => {

    passport.authenticate('local', (err, user) => {

        if (err) { return next(err) }
        if (!user) {
            return res.status(409).send('Bad Request');
        }
        else {
            req.login(user, (err) => {

                var ret_val = {
                    first_log: user.first_log,
                    admin: user.admin,
                    root: user.root
                };

                if (err) { 
                    return next(err); 
                }

                if (user.first_log) {

                    var email = user.email;

                    // update user within database based on parameters
                    User.updateOne(req.session.passport.user, {first_log: false}, (err) => {
                        if (err) { 
                            throw err; 
                        } else {
                            console.log('Updated first_log to false')
                        }
                    })
                }

                if (user.admin || user.root) {
                    console.log('Admin or root')
                    return res.send(ret_val)
                }
                else if (!user.admin) {
                    console.log('normal user')
                    return res.send(ret_val)
                }

                console.log('User: ', user)
                //console.log('User logging in: ', req.session)
                //console.log('User ID: ', req.session.passport.user._id)
            });
        }
    })
    (req, res, next); 
};



/* store data from the forms */
exports.form = (req, res) => {


    if (req.user)
    {

        const session_user = req.session.passport.user._id;

        User.findOne({_id: session_user})
            .then(user => {
                if (user) {


                    //console.log('body', req.body)
                    var body_keys = Object.keys(req.body)
                    //console.log(body_keys)
                    var user_keys = user.toObject()
                    var personal_keys = Object.keys(user_keys.personalAndFamily)
                    var survivor_keys = Object.keys(user_keys.survivorAndBeneficiary)
                    //console.log(personal_keys)
                    //console.log(survivor_keys)

                    // personal intersection
                    var personal_result = {};
                    var personal_intersection = _.intersection(body_keys, personal_keys);
                    personal_intersection.forEach((key) => personal_result[key] = req.body[key]);
                    console.log(personal_result)

                    // survivor intersection
                    var survivor_result = {};
                    var survivor_intersection = _.intersection(body_keys, survivor_keys);
                    survivor_intersection.forEach((key) => survivor_result[key] = req.body[key]);
                    console.log(survivor_result)

                    //const form_data = Form(req.body);

                    // user exists
                    console.log("Saving form data...")

                    User.findOneAndUpdate({ "_id": session_user }, { "$set": survivor_result})
                        .exec(function(err, data) {
                            if(err) {
                                console.log(err);
                                res.status(500).send(err);
                            } else {
                                res.status(200).send('Data saved');
                            }
                        });
                }
            })
            .catch(err => console.log(err))
            } else {
                res.status(409).send('Bad Request')
            }
}





    // TODO connect with frontend
exports.google_auth = (req, res) => {

    console.log('This got called!')

    // use google strategy
    passport.authenticate('google', {
        scope: ['profile']
    })
    res.send();
}



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
    .catch(err => console.log(err))
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
                this.logout();
                res.send('Deleted');
        })
    }
};
