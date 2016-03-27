//Archivo de configuraci�n para el servidor 
//Librerias Requeridas para el funcionamiento de la aplicaci�n 

var express = require("express"),
    morgan = require("morgan"), 
    bodyParser = require("body-parser"),
    passport = require("passport"),
    path = require('path'),
    flash = require("connect-flash");

var userRoutes = require("../app/routes/user.server.routes");
var patientRoutes = require("../app/routes/patient.server.routes");

module.exports = function() {
    
    var app = express();



    //Configuraci�n del Loger 
    app.use(morgan("dev"));
    
    //BodyParser 
    app.use(bodyParser.urlencoded(
        { extended : true }
    ));
    app.use(bodyParser.json());
    
    //Passport 
    app.use(require('express-session')({ secret: 'nutreenvironment', resave: false, saveUninitialized: false }));
    app.use(flash()); 
    app.use(passport.initialize());
    app.use(passport.session());

    //Motor de vistas EJS
    app.set("views", "./app/views");
    app.set("view engine", "ejs");
    
    //Archivos estaticos
    app.use(express.static("./public"));
    
    
    //Rutas Usuarios, Clientes, Principal

    app.use("/", userRoutes);
    app.use("/patient", patientRoutes);
/*
    require("../app/routes/user.server.routes.js")(app); 
    require("../app/routes/patient.server.routes.js")(app);*/
    app.use(function (req, res, next) {
        res.status(404).send('Sorry cant find that!');
    });


    return app;
    
};
