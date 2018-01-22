const UsersController = require('../../../api/controllers/usersController');

describe("get_all_users", function(){
  it("should return all users", function(){
    UsersController.get_all_users();
  });
});
