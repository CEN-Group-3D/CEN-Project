/* TODO verify routes with frontend */
var users = require('../controllers/users.server.controller.js'), 
    express = require('express'),
    router = express.Router();

/* the route here is "server_host/api/users" */

router.route('/')
  .get(users.list_all) /* return a list of all users in database*/
  .post(users.create); /*creates a user*/

/*
  The ':' specifies a URL parameter. 
 */
router.route('/:userId')
  .get(users.list_one)
  .put(users.update)
  .delete(users.delete);

router.param('userId', users.userByID);

module.exports = router;
