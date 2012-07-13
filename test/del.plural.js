var requireindex = require('requireindex');
var expect       = require('expect.js');
var request      = require('request');

var fixtures = requireindex('./test/fixtures');

describe('DEL plural', function () {
  before(fixtures.vegetable.init);
  beforeEach(fixtures.vegetable.create);

  it('should delete all documents in addressed collection', function (done) {
    var options = {
      url: 'http://localhost:8012/api/vegetables/',
      json: true
    };
    request.del(options, function (err, response, body) {
      if (err) return done(err);
      expect(response).to.have.property('statusCode', 200);
      expect(body).to.be(8); // deleted count
      done();
    });
  });
});