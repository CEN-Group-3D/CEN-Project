const User = require('../models/user.server.model.js'),
      passport = require('passport'),
      { check, validationResult } = require('express-validator'),
      bcrypt = require('bcryptjs'),
      saltRounds = 10;

/* Retrieve all the users, sorted alphabetically by user name */
exports.get_users = (req, res) => {

    if (req.user && req.session.passport.user.admin) {
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

    // only upgrade if root and is logged in
    if (req.user && req.session.passport.user.root) {

        // email to upgrade to admin
        const email = req.body.email;
        console.log(email)

        // user to be updated
        User.updateOne({email: email}, {admin: true}, (err) => {
            if (err) { 
                throw err; 
            } else {
                req.session.passport.user.admin = true
                console.log("Found user and updating")
                res.send('Updated to admin')
            }
        })
    } else {
        console.log('User not logged in or not root...')
        res.status(409).send('Bad Request')
    }
}




exports.delete = (req, res) => {


    // only delete if root and is logged in
    if (req.user && req.session.passport.user.root) {

        const email = req.body.email;
        console.log(email)

        // add later fix to not delete random user when receiving empty {}
        User.deleteOne({email: email}, (err) => {
            if (err) {
                throw err;
            }
            else
                //console.log("User deleted");
                res.send('Deleted');
        })
    }
    else {
        res.status(409).send('Bad Request');
    }
}
