
var should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express'), 
    User = require('../models/users.server.model.js');

/* Global variables */
var app, agent, user, id, id2;

    var user = {
      name: 'pleaseWork', 
      email: 'bigstest12@gmail.com',
      password: 'password123',
      password_confirm: 'password123'
    };

    var updatedUser = {
      name: 'tryme', 
      email: 'myTest@gmail.com',
      password: 'password',
      password_confirm: 'password'
    };

/* Unit tests for testing server side routes for the users API */
describe('Users CRUD tests', function() {

  this.timeout(10000);

  before(function(done) {
    app = express.init();
    agent = request.agent(app);

    done();
  });

  //it('should be able to retrieve all users', function(done) {
  //  agent.get('/get_users')
  //    .expect(200)
  //    .end(function(err, res) {
  //      should.not.exist(err);
  //      should.exist(res);
  //      res.body.should.have.length(4);
  //      done();
  //    });
  //});

 // it('should be able to retrieve a single user', function(done) {
 //   User.findOne({email: 'kthompson@gmail.com'}, function(err, user) {
 //     if(err) {
 //       console.log(err);
 //     } else {
 //       agent.get('/' + user._id)
 //         .expect(200)
 //         .end(function(err, res) {
 //           should.not.exist(err);
 //           should.exist(res);
 //           res.body.name.should.equal('ken maybeagain');
 //           res.body.email.should.equal('kthompson@gmail.com');
 //           res.body._id.should.equal(user._id.toString());
 //           done();
 //         });
 //     }
 //   });
 // });

  it('should be able to save a user', function(done) {
    agent.post('/register')
      .send(user)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('tim testmeagain');
        res.body.email.should.equal('bigstest12@gmail.com');
        id = res.body._id;
        done();
      });
  });

  it('should be able to update a user', function(done) {
    agent.put('/' + id)
      .send(updatedUser)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('tryme');
        res.body.email.should.equal('myTest@gmail.com');
        done();
      });
  });

 // it('should be able to delete a user', function(done) {
 //   agent.delete('/' + id)
 //     .expect(200)
 //     .end(function(err, res) {
 //       should.not.exist(err);
 //       should.exist(res);

 //       agent.get('/' + id) 
 //         .expect(400)
 //         .end(function(err, res) {
 //           id = undefined;
 //           done();
 //         });
 //     })
 // });

 // after(function(done) {
 //   if(id) {
 //     User.deleteOne({_id: id}, function(err){
 //       if(err) throw err;
 //       next();
 //     }); 
 //   }
 //     if(id2) {
 //     User.deleteOne({_id: id2}, function(err){
 //       if(err) throw err;
 //       done();
 //     });
 //   }else done();
 // }); 
});
