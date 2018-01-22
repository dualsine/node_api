const express = require('express'),
      router = express.Router();

module.exports = function(app) {

  require('./userRoutes')(router);

  app.use('/api', router);

};
