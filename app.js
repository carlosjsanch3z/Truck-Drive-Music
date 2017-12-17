'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/pruebas', function(req, res){
  res.status(200).send({message: 'Bienvenido a la aplicación escrita en NodeJS'});
});

module.exports = app;
