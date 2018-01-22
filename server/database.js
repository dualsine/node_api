const config = require('../config'),
      mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.db_name);
};
