// Dependencies
var connection = require('../connection');

function Auction() {
    this.postAuction = function(res,data) {
        connection.acquire(function(err, con) {
          var respond = {};
          // Retrieve all user from users table
          con.query('select * from auction where auction_status=1', function(err, result) {

            if (result.length > 0) {
                con.query('insert into auction (inven_id,auction_quantity,auction_status,auction_min_bid)\
                 VALUES ("'+data.id+'","'+data.qty+'","0",'+data.minbid+')', function(err, result) {
                     if (!err) {
                            // set json as response
                            respond = {
                                status : 1,
                                message : "queued"
                            }
                            res.json(respond);
                     }

                });


            }else{
                con.query('insert into auction (inven_id,auction_quantity,auction_status,auction_min_bid,auction_time)\
                 VALUES ("'+data.id+'","'+data.qty+'","1",'+data.minbid+','+new Date().getTime()+')', function(err, result) {
                     if (!err) {
                            // set json as response
                            respond = {
                                status : 1,
                                message : "success"
                            }
                            res.json(respond);
                     }

                });
            }


          });
          // close connection
          con.release();
        });
      };

      this.getAuction = function(res,data) {
          connection.acquire(function(err, con) {
            var respond = {};
            // Retrieve all user from users table
            var query = 'SELECT auction.id, auction.inven_id, auction.auction_quantity,auction.auction_min_bid,auction.auction_max_bid,auction.auction_bidderid,auction.auction_time,auction.auction_time_extended\
                                ,users_inventory.inven_name,users_inventory.inven_image,users_inventory.inven_owner\
                        FROM auction\
                        INNER JOIN users_inventory\
                        ON auction.inven_id=users_inventory.id AND auction.auction_status = 1';

            con.query(query, function(err, result) {

              if (result.length <= 0) {
                  respond = {
                      status : 0,
                      message : "There are no current auction"
                  }
                  res.json(respond);

              }else{
                  respond = result[0];
                  respond.status = 1,
                  res.json(respond);
              }


            });
            // close connection
            con.release();
          });
        };

        this.updateBidAuction = function(res,data) {
            connection.acquire(function(err, con) {
              var respond = {};
              // Retrieve all user from users table
              var extQuery = '';
              if (data.ext == 1) {
                  extQuery = ',auction_time_extended='+new Date().getTime()+'';
              }
              var query = 'update auction set auction_max_bid='+data.bid+',auction_bidderid="'+data.uid+'"'+extQuery+' where id='+data.aid+'';

              con.query(query, function(err, result) {

                if (!err) {
                    respond = {
                        status : 1,
                        message : "You are the have the highest bidding"
                    }
                    res.json(respond);

                }


              });
              // close connection
              con.release();
            });
          };

        this.putAuction = function(res,data) {
            connection.acquire(function(err, con) {
              var respond = {};
              // Retrieve all user from users table
              var query = 'update auction set auction_status="0" where id ="'+data.id+'"';

              con.query(query, function(err, result) {

                if (err) {
                    respond = {
                        status : 0,
                        message : "Error"
                    }
                    res.json(respond);

                }else{

                    if (parseInt(data.winbid) == 0) {

                        query ='UPDATE users_inventory\
                            SET inven_quantity=inven_quantity+'+data.qty+'\
                            WHERE inven_name="'+data.iid+'" AND inven_owner="'+data.oid+'"';
                            con.query(query, function(err, result) {

                            });
                    }
                    else{

                        query = 'UPDATE users\
                            SET coin=coin+'+data.winbid+'\
                            WHERE username="'+data.oid+'"';
                        var query2 = 'UPDATE users,users_inventory\
                            SET users.coin=users.coin-'+data.winbid+',users_inventory.inven_quantity=inven_quantity+'+data.qty+'\
                            WHERE users.username="'+data.wid+'" AND (users_inventory.inven_name="'+data.iid+'" AND users_inventory.inven_owner="'+data.wid+'")';
                        con.query(query, function(err, result) {
                            con.query(query2, function(err, result) {

                                if (err) {
                                    console.log("error update");
                                }

                            });
                        });


                    }
                      query = 'update auction set auction_status="1",auction_time='+new Date().getTime()+' where id ="'+(parseInt(data.id)+1)+'"';

                      con.query(query, function(err, result) {

                      });

                    respond = result;
                    respond.status = 1,
                    res.json(respond);
                }


              });
              // close connection
              con.release();
            });
          };

}
module.exports = new Auction();
