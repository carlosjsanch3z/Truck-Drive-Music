'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/truck_drive_music', (err, res) => {
  if(err){
    throw err;
  }else {
    console.log('Se ha podido conectar a la base de datos correctamente');
    app.listen(port, function(){
      console.log("El servidor esta escuchando en http://localhost:"+port);
    })
  }
});
