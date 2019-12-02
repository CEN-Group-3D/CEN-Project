const user = require('../controllers/user.server.controller.js'), 
      express = require('express'),
      router = express.Router();

/* login with passport authentication */
router.route('/login')
    .post(user.login);

router.route('/login_google')
    .get(user.google_auth);

/* user creation and register route */
router.route('/register')
    .post(user.register); /* creates a user */

/* routes for passing in a userId */
router.route('/update')
    .put(user.update)

router.route('/delete')
    .delete(user.delete);

router.route('get_user')
    //.get(user.user)

// logout from user dashboard
router.route('/logout')
    .post(user.logout)

module.exports = router;
