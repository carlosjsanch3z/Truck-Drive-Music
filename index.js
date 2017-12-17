'use strict'

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/truck_drive_music', (err, res) => {
  if(err){
    throw err;
  }else {
    console.log('Se ha podido conectar a la base de datos correctamente');
  }
})
