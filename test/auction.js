var expect  = require("chai").expect;
var request = require("request");

var jwt = "";
var url = "http://localhost:8080/";
var currentuser = "";

describe("Authentication /authenticate/:username", function() {
  var username = "test";
  var newurl = url+"authenticate/"+username;
  describe("Login with username : "+username, function() {

    it("returns status 200", function(done) {
      request(newurl, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("existed users", function(done) {
      request(newurl, function(error, response, body) {
        body = JSON.parse(body);
        expect(body.status).to.equal(1);
        jwt = body.jwt;
        done();
      });
    });

  });
  username = username+Math.floor((Math.random() * 1000000000000) + 1);
  describe("Login with username : "+username, function() {
    var newurl = url+"authenticate/"+username;
    it("make new users", function(done) {
      request(newurl, function(error, response, body) {
        body = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(body.status).to.equal(2);
        currentuser = body.username;
        done();
      });
    });
  });
});

describe("Get users information /api/users/:username", function() {
  var username = "test";
  var path = "api/users/"+username;

    it("returns users information", function(done) {
        var req = {
                  uri:url+path,
                  method: 'GET',
                  headers: {
                      'Authorization': 'Bearer '+jwt,
                    }
                  };
      request(req, function(error, response, body,request) {
        body = JSON.parse(body);
        expect(body.status).to.equal(1);
        done();
      });
    });
});

describe("Get users inventory information /api/:username/inventory", function() {
    it("returns inventory in arrays", function(done) {
        var username = currentuser;
        var path = "api/"+username+"/inventory";

        var req = {
                  uri:url+path,
                  method: 'GET',
                  headers: {
                      'Authorization': 'Bearer '+jwt,
                    }
                  };
      request(req, function(error, response, body,request) {
        body = JSON.parse(body);
        expect(body).to.be.an('array');
        done();
      });
    });
});

describe("Get no current auction  /api/auction", function() {
    it("returns status 0", function(done) {
        var username = currentuser;
        var path = "api/auction";
        var req = {
                  uri:url+path,
                  method: 'GET',
                  headers: {
                      'Authorization': 'Bearer '+jwt,
                    }
                  };
      request(req, function(error, response, body,request) {
        body = JSON.parse(body);
        expect(body.status).to.equal(0);
        done();
      });
    });
});

describe("Post and update auction  /api/auction", function() {
    it("post auction returns statuscode 200", function(done) {
        var username = currentuser;
        var path = "api/auction";
        var req = {
                  uri:url+path,
                  method: 'POST',
                  headers: {
                      'Authorization': 'Bearer '+jwt,
                    }
                  };
      request(req, function(error, response, body,request) {
        body = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("post auction returns no parameter status 0", function(done) {
        var username = currentuser;
        var path = "api/auction";
        var req = {
                  uri:url+path,
                  method: 'POST',
                  headers: {
                      'Authorization': 'Bearer '+jwt,
                    }
                  };
      request(req, function(error, response, body,request) {
        body = JSON.parse(body);
        expect(body.status).to.equal(0);
        done();
      });
    });

    it("update auction winner returns statuscode 200", function(done) {
        var username = currentuser;
        var path = "api/auction";
        var req = {
                  uri:url+path,
                  method: 'PUT',
                  headers: {
                      'Authorization': 'Bearer '+jwt,
                    }
                  };
      request(req, function(error, response, body,request) {
        body = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it("update auction winner returns no parameter status 0", function(done) {
        var username = currentuser;
        var path = "api/auction";
        var req = {
                  uri:url+path,
                  method: 'PUT',
                  headers: {
                      'Authorization': 'Bearer '+jwt,
                    }
                  };
      request(req, function(error, response, body,request) {
        body = JSON.parse(body);
        expect(body.status).to.equal(0);
        done();
      });
    });

    it("update auction bid returns statuscode 200", function(done) {
        var username = currentuser;
        var id = "";
        var path = "api/auction/"+id;
        var req = {
                  uri:url+path,
                  method: 'PUT',
                  headers: {
                      'Authorization': 'Bearer '+jwt,
                    }
                  };
      request(req, function(error, response, body,request) {
        body = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it("update auction bid returns no parameter status 0", function(done) {
        var username = currentuser;
        var id = "";
        var path = "api/auction/"+id;
        var req = {
                  uri:url+path,
                  method: 'PUT',
                  headers: {
                      'Authorization': 'Bearer '+jwt,
                    }
                  };
      request(req, function(error, response, body,request) {
        body = JSON.parse(body);
        expect(body.status).to.equal(0);
        done();
      });
    });


});
