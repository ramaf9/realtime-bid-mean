// Dependencies
var connection = require('../connection');

function User() {
    this.get = function(res) {
        connection.acquire(function(err, con) {
          var respond = {};
          // Retrieve all user from users table
          con.query('select * from users', function(err, result) {
            respond = result;
            // set json as response
            res.json(respond);

          });
          // close connection
          con.release();
        });
      };

    this.getUser = function(res,id) {
        connection.acquire(function(err, con) {
          var respond = {};
          con.query('select * from users where username = "'+id+'"', function(err, result) {
            // get only first row of result
            respond = result[0];
            // return value of respond
            if (!result) {
                respond.status = 0;
            }else{
                respond.status = 1;
            }
            res.json(respond);

          });
          // close connection
          con.release();
        });
      };
}
module.exports = new User();
