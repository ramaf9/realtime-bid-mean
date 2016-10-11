// Dependencies
var jwt = require('jsonwebtoken');
var connection = require('../connection');

var getToken = function(username){
    // Save claims
    var profile = {
        username : username,
    }
    // Generate new jwt
    var token = jwt.sign(profile, "thisisatest", { expiresIn : 60*60*5 });


    return token;
}

function Auth() {
    this.login = function(res,id) {
        connection.acquire(function(err, con) {
          var respond = {};
          // Retrieve user from users table
          con.query('select * from users where username ="'+id+'"', function(err, result) {
            // Get only first row of result
            respond = result[0];
            var token = getToken(id);

            // check if respond is not empty
            if (respond) {
                // update token and status for current user
                con.query('update users set status="1",jwt="'+token+'" where username ="'+id+'"', function(err,result){

                    if(err){
                        respond.status = 0; // error
                        respond.message= "Login error";
                        // set json as response
                        res.json(respond);
                    }
                    // Set extra response
                    respond.jwt = token;
                    respond.status = 1; // updated
                    respond.message= "Data login updated";
                    // set json as response
                    res.json(respond);

                })
            }
            else{
                // insert new user
                con.query('insert into users (username,jwt,status,coin) VALUES ("'+id+'","'+token+'","1",1000)',function(err,result){
                    if (result) {
                        con.query('insert into users_inventory (inven_name,inven_quantity,inven_image,inven_owner) \
                        VALUES ("bread",30,"/assets/bread.png","'+id+'"),("carrot",18,"/assets/carrot.png","'+id+'"),("diamond",1,"/assets/diamond.png","'+id+'")',function(err,result){
                        if (err) {
                            throw err;
                        }
                        })
                        respond = {
                            username : id,
                            status : 2, // inserted
                            message: "Data login inserted",
                            jwt:token
                        }
                    }
                    else{
                        // set error response
                        respond = {
                            status : 0, // fail login
                            message : "Login error"
                        }
                    }
                    // set json as response
                    res.json(respond);

                })
            }

        });
          // close connection
          con.release();
        });
      };
}
module.exports = new Auth();
