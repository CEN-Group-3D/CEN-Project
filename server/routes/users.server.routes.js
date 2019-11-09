/* TODO verify routes with frontend */
var users = require('../controllers/users.server.controller.js'), 
    express = require('express'),
    router = express.Router();

router.route('/login')
  .get(users.login)
 // .get(users.user_all) /* return a list of all users in database*/

router.route('/register')
  .post(users.register) /* creates a user */

/*
  The ':' specifies a URL parameter. 
 */
router.route('/:userId')
  .get(users.user)
  .put(users.update)
  .delete(users.delete);

router.param('userId', users.userByID);

module.exports = router;
