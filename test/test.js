var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
	it('respond with Testing Jenkins', function(done) {
		request(app).get('/').expect('Jenkins Test', done);
	});
});