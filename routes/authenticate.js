// Dependencies
var express = require('express');
var app = express();
var router = express.Router();

// Auth models
var auth = require('../models/auth');

// Routing url '/authenticate'
router.route('/:id')
    .get(function(req, res, next) {
        // call auth models method for login
        auth.login(res,req.params.id);

    });

module.exports = router;
