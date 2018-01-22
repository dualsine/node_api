const express = require('express');
const app = express();

require('./setup')(app);

require('./api/routes')(app);

if (!module.parent) {
  app.listen(3000, function () {
    console.log('server on port 3000');
  });
}

module.exports = app;
