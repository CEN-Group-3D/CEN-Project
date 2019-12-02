const User = require('../models/user.server.model.js'),
      passport = require('passport'),
      { check, validationResult } = require('express-validator'),
      bcrypt = require('bcryptjs'),
      saltRounds = 10;

/* Retrieve all the users, sorted alphabetically by user name */
exports.get_users = (req, res) => {


    if (req.user) {
        console.log(req.user)
        console.log('User session: ', req.session)
        console.log('User ID: ', req.session.passport.user._id)
        User.find({}).sort('name').exec((err, user) => {
            if (err) {
                throw err;
            } else {
                res.send(user);
            }
        });
    }
    else {
        console.log('Bad Request, not logged in')
        res.status(409).send('Bad Request, not logged in')
    }
};



/* upgrades a normal user to an admin */
exports.upgrade = (req, res) => {

    if (req.user) {

        // email to upgrade to admin
        const email = req.body.email

        // only upgrade if root and is logged in
        User.findById(req.session.passport.user._id)
            .then(user => {
                if (user && user.admin) {
                    console.log("This is the root user!")

                    User.findOne({email: email})
                        .then(user => {
                            if (user) {
                                User.updateOne(req.session.passport.user, {admin: true}, (err) => {
                                    if (err) { 
                                        throw err; 
                                    } else {
                                        res.send('Updated to admin')
                                    }
                                })
                            } else {
                                // user doesn't exist
                                console.log("User not found in database...")
                                res.status(409).send('Bad Request, not found in database')
                            }
                        })
                        .catch(err => console.log(err))
                }
            })
            .catch(err => console.log(err))
    } 
    else {
        console.log('User not logged in...')
        res.status(409).send('Bad Request, not logged in')
    }
}
