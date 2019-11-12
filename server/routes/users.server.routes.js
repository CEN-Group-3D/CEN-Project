const users = require('../controllers/users.server.controller.js'), 
      express = require('express'),
      auth = require('../config/auth'),
      router = express.Router();

/* login with passport authentication */
router.route('/login')
    .get(users.logged_out)
    .post(users.login);

/* get all users */
router.route('/get_users')
    .get(users.get_users);

/* user creation and register route */
router.route('/register')
    .post(users.register); /* creates a user */

/* routes for passing in a userId */
router.route('/:userId')
    .get(users.user)
    .put(users.update)
    .delete(users.delete);

// user dashboard
router.route('/dashboard')
    .get(users.dashboard);

/* logout handler */
router.route('/logout') //TODO make sure only logged in access this
    .post(users.logout);

// binds user to req object using ID parameter
router.param('userId', users.userByID);

module.exports = router;
