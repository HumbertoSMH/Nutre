//Archivo de configuraci�n para el servidor 
//Librerias Requeridas para el funcionamiento de la aplicaci�n 

var express    = require("express"),
    morgan     = require("morgan"), 
    bodyParser = require("body-parser");

module.exports = function() {
    
    var app = express();
    
    //Configuraci�n del Loger 
    app.use(morgan("dev"));
    
    //BodyParser 
    app.use(bodyParser.urlencoded(
        { extended : true }
    ));
    app.use(bodyParser.json());
    
    //Motor de vistas EJS
    app.set("views", "./app/views");
    app.set("view engine", "ejs");
    
    //Archivos estaticos
    app.use(express.static("./public"));
    
    
    //Rutas Usuarios, Clientes, Principal 

    require("../app/routes/user.server.routes.js")(app); 
    
    app.use(function (req, res, next) {
        res.status(404).send('Sorry cant find that!');
    });


    return app;
    
};