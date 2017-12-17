# Truck-Drive-Music
Esta aplicación esta realizada en javascript con nodejs + angular2

### Entorno de desarrollo y primeros pasos

SO: Debian Stretch

Instalar NodeJS:
~~~
curl -sL https://deb.nodesource.com/setup_8.x | bash -
apt update
apt install -y nodejs
~~~

Versiones:

* npm --version -> 5.5.1
* node --version -> v8.9.3

Instalar npm:
~~~
npm install -g npm
~~~

Instalar MongoDB:
~~~
apt install -y mongodb
systemctl enable mongodb.service
systemctl start mongodb.service
~~~

Crear el nuevo proyecto:
~~~
npm init
~~~

Package.json:

~~~
{
  "name": "truck-drive-music",
  "version": "1.0.0",
  "description": "Proyecto API Rest Con NodeJS",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Charlie Sanchez",
  "license": "MIT",
  "dependencies": {
    "bcrypt-nodejs": "0.0.3",
    "body-parser": "^1.18.2",
    "connect-multiparty": "^2.1.0",
    "express": "^4.16.2",
    "jwt-simple": "^0.5.1",
    "moment": "^2.19.4",
    "mongoose": "^4.13.7",
    "mongoose-pagination": "^1.0.0"
  },
  "devDependencies": {
    "nodemon": "^1.13.3"
  }
}
~~~

Instalar las dependencias definidas en el .json:

~~~
npm install
~~~

Crear la base de datos:
~~~
mongo
use truck_drive_music;
db.artists.save({name: 'Bad Bunny', description: 'Trapero Malote',image: 'null'});
db.artists.find();
~~~
