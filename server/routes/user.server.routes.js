const user = require('../controllers/user.server.controller.js'), 
      express = require('express'),
      router = express.Router();

/* login with passport authentication */
router.route('/login')
    .post(user.login);

/* user creation and register route */
router.route('/register')
    .post(user.register); /* creates a user */

/* routes for passing in a userId */
router.route('/:userCookie')
    //.get(user.user)
    .put(user.update)
    .delete(user.delete);

// logout from user dashboard
router.route('/logout')
    .post(user.logout)

// binds user to req object using ID parameter
//router.param('userCookie', user.userByCookie);

module.exports = router;
