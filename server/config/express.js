const path = require('path'),
      express = require('express'),
      mongoose = require('mongoose'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      session = require('express-session'),
      mongoStore = require('connect-mongo') (session),
      passport = require('passport'),
      passportConf = require('./passport'); // required 
      userRouter = require('../routes/users.server.routes');

var url = process.env.DB_URI;

module.exports.init = () => {

    // database connection
    mongoose.connect(url || require('./config').db.uri, {
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

    // connect flash
    // app.use(flash());
    
    // parsing middleware
    app.use(cookieParser()); // has to be above session
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}))

    // express sessions
    app.use(session({
        secret: 'static_random_string',
        resave: false, // only update cookie with data change
        saveUninitialized: false, // only create cookie on login
        store: new mongoStore({
        url: url || require('./config').db.uri,
        collection: 'sessions'}),
        cookie: {secure: false} // enabled for https
    }));

    // passport init
    app.use(passport.initialize());
    app.use(passport.session());
    
    // app.use(cors({ origin: 'https://localhost:3000', credentials: true }));

    // routes
    app.use('/', userRouter);
    //app.use('/admin', adminRouter);
    
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
