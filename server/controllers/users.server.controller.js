/* Dependencies */
var mongoose = require('mongoose'), 
    User = require('../models/users.server.model.js')
    
/* TODO Create a user */
exports.create = (req, res) => {

  /* Instantiate a user */
  var user = User(req.body);

    /* if user does not exist, then create it, otherwise output some error saying username exists*/

};



/* TODO Verify that it works Show the current user info */
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




/* TODO Delete a user */
exports.delete = (req, res) => {

  User.deleteOne(req, (err, data) => {
  if (err) {
    res.send(err);
  }
  else
    console.log("Deleted") // not sure if this is correct since a delete doesn't really need anything
  })
};




/* TODO Retreive all the users, sorted alphabetically by user code */
exports.user_all = (req, res) => {

  User.find({}).sort('code').exec((err, user) => {
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
    if(err) {
      res.send(err);
    } else {
      req.user = user;
      next();
    }
  });
};
