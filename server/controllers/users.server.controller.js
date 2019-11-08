/* Dependencies */
var mongoose = require('mongoose'), 
    User = require('../models/users.server.model.js'),
    bcrypt = require('bcryptjs');

/* user login */
exports.login = (req, res) => {
    
    //var status = err ? 400 : 200;
	//res.status(status).json(data);

    const {username, password} = req.body;
    //console.log(username, password)
    
    // check to see if user exists in database
    //    return user data
    // else
    //    send back no user exists

    res.send("User data")
}

/* Create a user */
exports.register = (req, res) => {

    // grab data from request
    const {name, email} = req.body; // add passwords back into here
    var password = "password";
    var password_confirm = "password";

    let errors = [];

    // check required fields
    if (!name || !email) {
        console.log('fill in all fields')
        errors.push({msq : 'Please fill in all fields'});
    }

    // check passwords are the same during user register
    if (password != password_confirm) {
        console.log('password do not match')
        errors.push({msg: 'Passwords do not match'})
    }

    // check pass length
    if (password.length < 6) {
        console.log('passwords needs to be at least 6 characters')
        errors.push({msg: 'Password should at least be 6 characters'});
    }

    if (errors.length > 0) {
        // reapply the registration form to the user
        res.send('fail')
    }
    else {
        // validation passed, verify user not in database, then save
        User.findOne({email: email}, (err, user) => {
            if (err) throw err;
            else if (user) {
                // user exists
                errors.push({msg: 'Email is already registered'});
                console.log("Exists")
            } else {
                // add user to database and ENCRYPT password
                var new_user = User(req.body);
                console.log('User created')
                
                new_user.save();

                // HASH password
              //  bcrypt.getSalt(10, (salt) => 
              //      bcrypt.hash(new_user.password, salt, (err, hash) => {
              //          if (err) throw err;

              //          console.log("hashing the password")
              //          // set password to hash
              //          new_user.password = hash;

              //          console.log("saving the user")
              //          // save the user
              //          new_user.save(err => {
              //              if (err) {
              //                  throw err;
              //              } else {
              //                  console.log('User created')
              //              }
              //          })
              //         // .then(user => {
              //         //     res.redirect('/login');
              //         // })
              //         // .catch(err => console.log(err));
              //  }))
                res.send('added user')
            }
        })
        res.send('pass')
    }
};



/* Verify that it works Show the current user info */
exports.user = (req, res) => {

  /* send back the user as json from the request */
  res.send(req.user);
};




/* TODO Update a user - note the order in which this function is called by the router*/
exports.update = (req, res) => {

  /* Instantiate a User */
  var user = User(req.body);

  /* Save the user */
    user.save(err => {
      if(err) {
        res.status(400).send(err);
      } 
      res.send(user);
    });
};




/* Delete a user */
exports.delete = (req, res) => {

  User.deleteOne(req, (err) => {
  if (err) {
    res.send(err);
  }
  else
    console.log("Deleted")
  })
};




/* TODO Retreive all the users, sorted alphabetically by user name */
exports.get_users = (req, res) => {

  User.find({}).sort('name').exec((err, user) => {
  if (err) {
    res.send(err);
  } else {
    res.send(user);
      }
  });
};



/* 
  Middleware: find a user by its ID, then pass it to the next request handler. 

 */
exports.userByID = function(req, res, next, id) {
  User.findById(id, (err, user) => {

      if (err) {
          res.send(err);
      } else {
        req.user = user;
        next();
    }
  });
};
