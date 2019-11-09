const path = require('path'),
      express = require('express'),
      mongoose = require('mongoose'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      session = require("express-session"),
      passport = require('passport'),
      passportConf = require('./passport');
      userRouter = require('../routes/users.server.routes');

module.exports.init = () => {

    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}))
    // express sessions // TODO not sure if we need
    app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
        //cookie: {secure: true}
    }))

    // connect flash
    // app.use(flash());
    
    // passport middleware
    app.use(passport.initialize());
    app.use(passport.session());


    // add a router
    //app.use('/', userRouter);
    //
    
    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/welcome',
            failureRedirect: '/login'
        })
    );


    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}
