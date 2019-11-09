const users = require('../controllers/users.server.controller.js'), 
      express = require('express'),
      router = express.Router(),
      { ensureAuthenticated } = require('../config/auth');

/* login with passport authentication */
router.route('/login')
    .post(users.login);

/* get all users */
router.route('/get_users')
    .get(users.get_users, ensureAuthenticated)

/* user creation and register route */
router.route('/register')
    .post(users.register) /* creates a user */

/* routes for passing in a userId */
router.route('/:userId')
    .get(users.user, ensureAuthenticated)
    .put(users.update, ensureAuthenticated)
    .delete(users.delete, ensureAuthenticated);

/* logout handler */
router.route('/logout/:userId')
    .get(users.logout, ensureAuthenticated)

// binds user to req object using ID parameter
router.param('userId', users.userByID);

module.exports = router;
