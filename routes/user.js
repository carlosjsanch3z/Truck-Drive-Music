'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

api.get('/testing', UserController.pruebas);

module.exports = api;
