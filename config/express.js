//Archivo de configuración para el servidor 
//Librerias Requeridas para el funcionamiento de la aplicación 

var express = require("express"),
    morgan = require("morgan"), 
    bodyParser = require("body-parser"),
    passport = require("passport"),
<<<<<<< HEAD
    express_session = require("express-session"),
    flash = require("connect-flash");
=======
    express_session = require("express-session");
>>>>>>> origin/master

module.exports = function() {
    
    var app = express();
    
    //Configuración del Loger 
    app.use(morgan("dev"));
    
    //BodyParser 
    app.use(bodyParser.urlencoded(
        { extended : true }
    ));
    app.use(bodyParser.json());
    
    //Passport 
<<<<<<< HEAD
    app.use(require('express-session')({ secret: 'nutreenvironment', resave: false, saveUninitialized: false }));
    app.use(flash()); 
    app.use(passport.initialize());
=======
    //app.use(express_session.session({
    //    secret: "NutreEnviron", 
    //    resave: false, 
    //    saveUninitialized: false
    //}));
    app.use(require('express-session')({ secret: 'nutreenvironment', resave: false, saveUninitialized: false }));
    app.use(passport.initialize());
    
>>>>>>> origin/master
    app.use(passport.session());

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
