const express = require('express'),
      jwt = require('jsonwebtoken'),
      User = require('../models/user'),
      config = require('../../../config');

exports.get_all_users = function(req, res) {
  User.find(function (err, users) {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
};

exports.get_user = function(req, res) {
  User.findById(req.params._id, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.create_user = function(req, res) {
  var user = new User(req.body);
  user.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'User created!' });
  });
};

exports.delete_user = function(req, res) {
  User.remove({
    _id: req.params._id
  }, function(err, user) {
    if (err) res.send(err);
    res.json({ message: 'User deleted' });
  });
};

exports.update_user = function(req, res) {
  User.findById(req.params._id, function(err, user) {
    if (err) res.send(err);

    if(req.body.email) user.email = req.body.email;
    if(req.body.password) user.password = req.body.password;

    user.save(function(err) {
      if (err) res.send(err);
      res.json({ message: 'User updated' });
    });
  })
};

exports.login = function(req, res){
  User.findOne({email: req.body.email}, function(err, user){
    if (err) res.send(err);
    user.comparePassword(req.body.password, function(err, isMatch){
      if(err) throw err;
      if(isMatch) {
        var token = jwt.sign({ id: user._id }, config.jwt.secret, {
          expiresIn: 86400 // 24h
        });
        res.json({match: 'ok', token: token});
      } else {
        res.json({match: 'wrong'});
      }
    });
  });
};
