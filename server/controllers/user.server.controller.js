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




exports.get_form_data = (req, res) => {
        
    if (req.user) {
        return res.send(req.user)

    } else {
        return res.status(409).send('Bad Request')
    }
}




/* receives the selected payment plan from user */
exports.payment = (req, res) => {
    
    if (req.user) {
        console.log(req.session.passport.user._id)
        const paymentPlan = req.body.paymentPlan;
        console.log(paymentPlan)

        // update user within database based on parameters
        User.updateOne({_id: req.session.passport.user._id}, {plan: paymentPlan}, (err) => {
            if (err) { 
                throw err; 
            } else {
                console.log('Updated payment plan')
                res.send('Updated user')
            }
        })
    }
}




/* return payment plan to frontend */
exports.get_plan = (req, res) => {

    if (req.user) {

        console.log(req.session.passport.user._id)

        User.findOne({_id: req.session.passport.user._id})
            .then(user => {
                if (user) {

                    var ret_val = {
                        plan: user.plan
                    }
                    // may throw an error having a return in here
                    return res.send(ret_val)
                } else {
                    return res.send('Bad Request')
                }
            })
            .catch(err => console.log(err))
    }
}



/* store data from the forms */
exports.form = (req, res) => {

    if (req.user)
    {
        const session_user = req.session.passport.user._id;

        console.log(req.body)
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
                    //console.log(survivor_result)

                    //const form_data = Form(req.body);

                    User.updateOne({_id: req.session.passport.user._id}, {personalAndFamily: personal_result}, (err) => {
                        if (err) { 
                            throw err; 
                        } else {
                            User.updateOne({_id: req.session.passport.user._id}, {survivorAndBeneficiary: survivor_result}, (err) => {
                                if (err) { 
                                    throw err; 
                                } else {
                                    console.log('Updated form data')
                                }
                            })
                        }
                    })
                    res.send('OK')
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
    console.log(req.body)

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
    console.log('User info in database', req.session.passport.user._id)
    //console.log('User ', req.user)

    if (req.user) {

        // grab data from request
        const info = {
            name: req.body.username,
            email: req.body.email
        }

        User.findOne({email: info.email})
            .then(user => {
                if (user) {

                    // user exists and they are only updating their email
                    console.log("User already exists, try a new email")
                    res.status(409).send('Bad Request')
                } else {

                    User.updateOne({_id: req.session.passport.user._id}, {$set: info}, (err) => {
                        if (err) { 
                            throw err; 
                        } else {
                            console.log('Updated user')
                        }
                    })


                    console.log(info.name)
                    if (!info.email && info.email != req.session.passport.user.email) {
                        req.session.passport.user.email = info.email;
                    }
                    if (!info.name && info.name != req.session.passport.user.name) {
                        req.session.passport.user.name = info.name;
                    }
                    //console.log(req.session.passport.user)
                    res.send('OK')
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
        User.deleteOne({_id: req.session.passport.user._id}, (err) => {
            if (err) {
                throw err;
            }
            else
                req.logout();
            req.session.destroy();
            res.send('Deleted');
            console.log("User deleted");
        })
    }
    else {
        console.log("No user found")
    }
};
