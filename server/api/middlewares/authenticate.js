const config = require('../../../config'),
      jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({
    auth: false,
    message: 'No token provided.'
  });

  jwt.verify(token, config.jwt.secret, function(err, decoded) {
    if (err) {
      console.log(err);
      return res.status(500).send({
        auth: false,
        message: 'Failed to authenticate token.'
      });
    }

    next();
  });
}
