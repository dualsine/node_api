const express = require('express');
const app = express();

require('./setup')(app);

require('./api/routes')(app);

app.listen(3000, function(){
  console.log('server on port 3000');
});
