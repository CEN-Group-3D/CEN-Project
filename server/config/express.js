const path = require('path'),
      express = require('express'),
      mongoose = require('mongoose'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      mongoStore = require('connect-mongo')(session),
      passport = require('passport'),
      passportConf = require('./passport'), // required 
      //{Storage} = require('@google-cloud/storage'),
      //{createWriteStream} = require("fs"),
      //{ApolloServer, gql} = require('apollo-server-express'),
      adminRouter = require('../routes/admin.server.routes'),
      mainRouter = require('../routes/mainRouter.server.routes'),
      userRouter = require('../routes/user.server.routes');

module.exports.init = () => {

    // database connection
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

    // parsing middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    // google cloud
   // const gc = new Storage({
   //     keyFilename: path.join(__dirname, "./cenProject-483d5b367e81.json"),
   //     projectId: 'cenproject'
   // });

    
    //gc.getBuckets().then(x => console.log(x)).catch(err => console.log(err))
    //const file = gc.bucket('cen_files');

    // express sessions
    app.use(session({
        secret: 'static_random_string',
        resave: false, // only update cookie with data change
        saveUninitialized: false, // only create cookie on login
        store: new mongoStore({
        mongooseConnection: mongoose.connection,
        collection: 'sessions'}),
        cookie: {secure: false} // enabled for https
    }));

    // passport init
    app.use(passport.initialize());
    app.use(passport.session());
    
    // app.use(cors({ origin: 'https://localhost:3000', credentials: true }));

    // routes

    //app.use('/upload', mainRouter);
    //app.use('/', mainRouter);
    app.use('/user', userRouter);
    app.use('/admin', adminRouter);
    
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
