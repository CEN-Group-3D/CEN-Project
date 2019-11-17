var should = require('should'), 
    mongoose = require('mongoose'), 
    User = require('../models/users.server.model'), 
    config = require('../config/config');

var user, id;

user =  {
  name: "Tim Henry", 
  email: "timhenry@gmail.com"
}

describe('User Schema Unit Tests', function() {

  before(function(done) {
    mongoose.connect(config.db.uri, { useNewUrlParser: true });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
    done();
  });

  describe('Saving to database', function() {
    /*
      Mocha's default timeout for tests is 2000ms. To ensure that the tests do not fail 
      prematurely, we can increase the timeout setting with the method this.timeout()
     */
    this.timeout(10000);

    it('saves properly when name and email are provided', function(done){
      new User({
        name: user.name, 
        email: user.email
      })
        .save(function(err, user){
        should.not.exist(err);
        id = user._id;
        done();
      });
    });

    it('saves properly when all properties provided', function(done){
      new User(
          user
      )
        .save(function(err, user){
        should.not.exist(err);
        id = user._id;
        done();
      });
    });

    it('throws an error when email not provided', function(done){
      new User({
        name: user.name
      })
        .save(function(err){
        should.exist(err);
        done();
      })
    });
  });

  //afterEach(function(done) {
  //  if(id) {
  //    User.deleteOne({ _id: id }).exec(function() {
  //      id = null;
  //      done();
  //    });
  //  } else {
  //    done();
  //  }
  //});
});
