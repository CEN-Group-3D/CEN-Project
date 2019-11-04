var path = require('path'),  
    express = require('express'),  //refers to Express the middleware helper for Node.js 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    usersRouter = require('../routes/users.server.routes') 

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri, { useNewUrlParser: true });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  /* serve static files - see http://expressjs.com/en/starter/static-files.html */
  app.use('/', express.static(__dirname + '/../../client/public'));

  app.use('/api/users', usersRouter);

  /* Request Handeler for all other routes
     Sends a response (res) to go to the homepage for all routes not specified */ 
  app.all('/*', (req, res) => {
   
    res.sendFile(path.join(__dirname + '/../../client/public/index.html'));
        
  });
  
  return app;
};  
