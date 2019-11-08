var users = require('../controllers/users.server.controller.js'), 
    express = require('express'),
    router = express.Router();

router.route('/login')
    .get(users.login) /* reads user from database */

router.route('/get_users')
    .get(users.get_users)

router.route('/register')
    .post(users.register) /* creates a user */

router.route('/:userId')
    .get(users.user)
    .put(users.update)
    .delete(users.delete);

// middleware that binds user to req object
router.param('userId', users.userByID);

module.exports = router;
