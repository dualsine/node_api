const bodyparser = require('body-parser');

module.exports = function(app){

  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(bodyparser.json());

  require('./database')();

};
