//Controlador para los usuarios maneja el renderizado
//y las inserciones a base de datos. 

require("../models/user.model.js"); 
var modelUser = require("mongoose").model("User");
var passport = require("passport");


//Render de paginas. 
exports.signInRender = function (req, res, next) 
{
    res.render("signin", {}); 
}

exports.signUpRender = function (req, res, next) 
{
    res.render("signup", {}); 
}

//Controladores para peticiones POST. 
exports.signUp = function (req, res, next) {
    var newUser = new modelUser({
        firstName : req.body.firstName,
        lastName  : req.body.lastName, 
        email     : req.body.email, 
        dateCreate: Date(), 
        userType  : "Basic",
        password  : req.body.password
    });
    
    newUser.save(function (err, user) {
        if (err) {
            console.log(err);
            res.send("No se ha completado con exito.");
        }
        else {
            console.log(user);
            res.send("Guardado con exito");
        }
    });
};


exports.signOut = function (req, res) 
{
    req.logout();
    res.redirect("/");
}

exports.Bien = function (req, res) 
{
    console.log(req);
    res.render("nutre", { user: req.user.firstName }); 
}