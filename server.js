
//Servidor principal de la aplicación 
//corre en el puerto : 4500 

var express = require("./config/express.js");
var passport = require("./config/passport.js");

var passport = passport();
var app = express();

app.listen(4500, function () { 
    console.log("Se ha creado la conexion");
})