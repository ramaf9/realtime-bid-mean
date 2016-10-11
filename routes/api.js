// Dependencies
var express = require('express');
var jwt = require('jsonwebtoken');
var connection = require('../connection');
var app = express();
var router = express.Router();

// User models
var user = require('../models/user');
var inven = require('../models/inven');
var auction = require('../models/auction');

// Routing middleware for all '/api'
router.use(function (req, res, next) {
  // Get authorization header (jwt)
  var token = req.headers.authorization.split(' ')[1];
  // Decoding jwt payload
  var decoded = jwt.decode(token);

  connection.acquire(function(err, con) {
    var respond = {};
    // Get user saved jwt from db
    con.query('select * from users where username = "'+decoded.username+'"', function(err, result) {
      respond = result[0];
      if (respond.jwt && respond.jwt == token) {
          next();
      }

    });

    con.release();
  });
});

// Routing url '/api'
router.route('/users/:id')
    .get(function(req, res, next) {
        // get user from db
        user.getUser(res,req.params.id);

    });
//
router.route('/:id/inventory')
    .get(function(req, res, next) {
        // get users all inventory from db
        inven.getUserInven(res,req.params.id);

    });
router.route('/inventory/:id')
    .put(function(req, res, next) {
        // update inventory from db
        var balance = req.query.balance;
        inven.updateUserInven(res,req.params.id,balance);

    });

router.route('/auction/:id')
    .put(function(req, res, next) {
        // update bid auction from db
        var data = {
            aid:req.params.id,
            uid:req.query.uid,
            bid:req.query.bid,
            ext:req.query.ext
        }
        if (data.aid && data.uid && data.bid && data.ext) {
            auction.updateBidAuction(res,data);
        }
        else{
            var respond = {};
            respond.status = 0;
            respond.message = "No parameter founds";
            res.send(respond);
        }


    });

router.route('/auction')
    .post(function(req, res, next) {
        // set new auction from db
        var data = {
            id:req.query.invenid,
            qty:req.query.qty,
            minbid:req.query.minbid
        };
        if (data.id && data.qty && data.minbid) {
            auction.postAuction(res,data);
        }
        else{
            var respond = {};
            respond.status = 0;
            respond.message = "No parameter founds";
            res.send(respond);
        }


    })
    .get(function(req, res, next) {
        // get auction from db
        auction.getAuction(res);

    })
    .put(function(req, res, next) {
        // update end auction from db
        var data = {
            id :req.query.id,
            wid : req.query.wid,
            oid : req.query.oid,
            qty : req.query.qty,
            iid : req.query.iid,
            winbid : req.query.winbid

        }
        if (data.id && data.wid && data.oid && data.qty && data.iid && data.winbid) {
            auction.putAuction(res,data);
        }
        else{
            var respond = {};
            respond.status = 0;
            respond.message = "No parameter founds";
            res.send(respond);
        }
    });

module.exports = router;
