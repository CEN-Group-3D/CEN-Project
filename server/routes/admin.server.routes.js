const admin = require('../controllers/admin.server.controller.js'), 
      user = require('../controllers/user.server.controller.js'), 
      express = require('express'),
      router = express.Router();

/*-------------------------------------- admin only functions------------------------------*/
/* get all users */
router.route('/get_users')
    .get(admin.get_users);

router.route('/upgrade')
    .put(admin.upgrade);

router.route('/delete')
    .delete(user.delete);

//router.route('/login')
//    post(user.login)

/*-------------------------------------- admin only functions------------------------------*/

/* login with passport authentication */
//router.route('/login')
//    .post(user.login);

/* routes for passing in a userId */
//router.route('/:adminId')
    //.get(users.user)
    //.put(user.update)
    //.delete(user.delete);

// logout from user dashboard
//router.route('/logout')
//    .post(user.logout)

// binds user to req object using ID parameter
//router.param('adminCookie', user.userByCookie);

module.exports = router;
