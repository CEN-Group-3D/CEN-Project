const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser')
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
    // app.use(express.urlencoded({extended: false}));

    // add a router
    app.use('/users', userRouter);

    app.post('/login', function(req, res) {
        var user_name=req.body.user
        var password=req.body.password
        res.end("yes")
    })

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

