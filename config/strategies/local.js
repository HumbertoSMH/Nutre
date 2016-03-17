// Estrategia local para la autenticación de los 
//usuarios por medio de password y un correo electronico 


//Configuración de passport 

//   usernameField: 'email',
//   passwordField: 'passwd',
require("../../app/models/user.model.js");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("mongoose").model("User");

module.exports = function () 
{
    passport.use(new LocalStrategy({
        usernameField: "email"
    }, 
           function (username, password, done) {
        User.findOne({ email : username }, function (err, user) {
            if (err) {
                console.log(err);
                return done(err);
            }

            if (!user) {
                return done(null, false, { message : "No existe el usuario" });
            }

            if (password === user.encriptar(username, password)) { 
                console.log("No se encontro conincidencia");
                return done(null, false, { message : "Password incorrecto" });
            }

            return done(null, user);
        });
    }));
}
