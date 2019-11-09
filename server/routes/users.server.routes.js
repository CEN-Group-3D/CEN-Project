var users = require('../controllers/users.server.controller.js'), 
    express = require('express'),
    { ensureAuthenticated } = require('../config/auth'),
    router = express.Router();

/* login with passport authentication */
router.route('/login')
    .post(users.login);

/* get all users */
router.route('/get_users')
    .get(users.get_users, ensureAuthenticated) // TODO apply to other links

/* user creation and register route */
router.route('/register')
    .post(users.register) /* creates a user */

/* routes for passing in a userId */
router.route('/:userId')
    .get(users.user)
    .put(users.update)
    .delete(users.delete);

/* logout handler */
router.route('/logout/:userId')
    .get(users.logout)

// binds user to req object using ID parameter
router.param('userId', users.userByID);

module.exports = router;
