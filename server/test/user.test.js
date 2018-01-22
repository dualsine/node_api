const mongoose = require('mongoose');
const httpStatus = require('http-status');
const request = require('supertest');
const chai = require('chai');
const app = require('../index');

after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('## User APIs', function(){
  let user = {
    username: 'KK123',
    mobileNumber: '1234567890'
  };

  describe('# GET /api/users/', function(){
    it('should get all users when authorized', function(done) {
      request(app)
        .get('/api/users')
        .expect(httpStatus.OK)
        .then(function(res){
          expect(res.body).to.be.an('array');
          done();
        }).catch(done);
    });
  });
});
