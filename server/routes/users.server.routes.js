/* TODO verify routes with frontend */
var users = require('../controllers/users.server.controller.js'), 
    express = require('express'),
    router = express.Router();

router.route('/')
  .get(users.list);

/*
  The ':' specifies a URL parameter. 
 */
router.route('/:userId')
  .get(users.read)
  .put(users.update)
  .delete(users.delete);

router.param('userId', users.userByID);

module.exports = router;
