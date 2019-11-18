const User = require('../models/user.server.model.js');

/* Retrieve all the users, sorted alphabetically by user name */
exports.get_users = (req, res) => {

    User.find({}).sort('name').exec((err, user) => {
        if (err) {
            throw err;
        } else {
            res.send(user);
        }
    });
};
