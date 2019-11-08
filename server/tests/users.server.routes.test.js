
var should = require('should'), 
    request = require('supertest'), 
    express = require('../config/express'), 
    User = require('../models/users.server.model.js');

/* Global variables */
var app, agent, user, id;

/* Unit tests for testing server side routes for the users API */
describe('Users CRUD tests', function() {

  this.timeout(10000);

  before(function(done) {
    app = express.init();
    agent = request.agent(app);

    done();
  });

  it('should it able to retrieve all users', function(done) {
    agent.get('/api/get_users')
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.body.should.have.length(4);
        done();
      });
  });

  it('should be able to retrieve a single user', function(done) {
    User.findOne({email: 'timhenry@gmail.com'}, function(err, user) {
      if(err) {
        console.log(err);
      } else {
        agent.get('/api/' + user._id)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            res.body.name.should.equal('Tim Henry');
            res.body.email.should.equal('timhenry@gmail.com');
            res.body._id.should.equal(user._id.toString());
            done();
          });
      }
    });
  });

  it('should be able to save a user', function(done) {
    var user = {
      name: 'bob smalls', 
      email: 'smalls@gmail.com'
    };
    agent.post('/api/register')
      .send(user)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('bob smalls');
        res.body.email.should.equal('smalls@gmail.com');
        id = res.body._id;
        done();
      });
  });



  it('should be able to update a user', function(done) {
    var updatedUser = {
      name: 'matthew connors', 
      email: 'another_test@gmail.com'
    };

    id = "5dc4c6f8e0d424825c1d4fe8";
    agent.put('/api/' + id)
      .send(updatedUser)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('matthew connors');
        res.body.email.should.equal('another_test@gmail.com');
        done();
      });
  });

  it('should be able to delete a user', function(done) {
    agent.delete('/api/' + id)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);

        agent.get('/api/' + id) 
          .expect(400)
          .end(function(err, res) {
            id = undefined;
            done();
          });
      })
  });

  after(function(done) {
    if(id) {
      User.deleteOne({_id: id}, function(err){
        if(err) throw err;
        next();
      }); 
    }
  }); 
});
