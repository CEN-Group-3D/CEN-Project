const admin = require('../controllers/admin.server.controller.js'), 
      users = require('../controllers/admin.server.controller.js'),
      express = require('express'),
      router = express.Router();

/*-------------------------------------- admin only functions------------------------------*/
/* get all users */
router.route('/get_users')
    .get(admin.get_users);

/*-------------------------------------- admin only functions------------------------------*/

/* login with passport authentication */
router.route('/login')
    .post(users.login);

/* routes for passing in a userId */
router.route('/:adminId')
    //.get(users.user)
    .put(users.update)
    .delete(users.delete);

// logout from user dashboard
router.route('/logout')
    .post(users.logout)

// binds user to req object using ID parameter
router.param('adminId', users.userByID);

module.exports = router;
