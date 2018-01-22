const bodyparser = require('body-parser'),
      config = require('../config'),
      mongoose = require('mongoose');

module.exports = function(app){

  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(bodyparser.json());

  mongoose.connect('mongodb://'+config.db.host+':'+config.db.port+'/'+config.db.db_name);

};
