// Dependencies
var connection = require('../connection');

function Inven() {
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

    this.getUserInven = function(res,id) {
        connection.acquire(function(err, con) {
          var respond = {};
          con.query('select * from users_inventory where inven_owner = "'+id+'"', function(err, result) {
            // get only first row of result
            respond = result;
            // return value of respond
            res.json(respond);

          });
          // close connection
          con.release();
        });
      };
    this.updateUserInven = function(res,id,balance) {
        connection.acquire(function(err, con) {
          var respond = {};
          
          con.query('update users_inventory set inven_quantity="'+balance+'" where id ="'+id+'"', function(err, result) {
            // get only first row of result
            if (err) {
                throw err;
            }
            respond = {
                status:1,
                message:"updated"
            }
            // return value of respond
            res.json(respond);

          });
          // close connection
          con.release();
        });
      };

}
module.exports = new Inven();
