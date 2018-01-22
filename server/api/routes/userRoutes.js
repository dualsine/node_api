const usersController = require('../controllers/usersController');
const authenticate = require('../middlewares/authenticate');

module.exports = function(router) {

  router.route('/users/login')
    .post(usersController.login);

  router.use(authenticate);

  router.route('/users')
    .get(usersController.get_all_users)
    .post(usersController.create_user);

  router.route('/users/:_id')
    .get(usersController.get_user)
    .put(usersController.update_user)
    .delete(usersController.delete_user);

};
