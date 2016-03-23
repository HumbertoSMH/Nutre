//Controlador para los usuarios maneja el renderizado
//y las inserciones a base de datos. 

require("../models/user.model.js"); 
var modelUser = require("mongoose").model("User");
var passport = require("passport");


var getErrorMessage = function (err) {
    
    var message = "";
    
    if (err.code) {
        switch (err.code) {
            case 11000: 
            case 11001:
                message = "Este Correo ya cuenta con un registro. Intente con una dirección de correo diferente";
                break
            default:
                message = "Algo ha salido mal";
        }
    }
    else {
        for (var errName in err.errors) {
            if (err.errors[errName].message)
                message = err.errors[errName].message;
        }
    }
    
    return message;
}

//Render de paginas. 
exports.signInRender = function (req, res, next) 
{
    //Si el usuario esta autenticado pasa directo a la pagina principal. 
    if (!req.user) {
        res.render("signin", {
            messages: req.flash("error") || req.flash("info")
        });
    } else {
        console.log(req.user.email);
        return res.redirect("/Nutre");
    }
}

exports.signUpRender = function (req, res, next) 
{
    if (!req.user) {
        res.render("signup", {
            messages : req.flash("error")
        });
    } else {
        return res.redirect("/");
    }
}

//Controladores para peticiones POST. 
exports.signUp = function (req, res, next) {
    
    if (!req.user) {
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
                var message = getErrorMessage(err);
                req.flash("error", message);
                console.log(message);
                return res.redirect("/signup");
            }
            req.login(newUser, function (err) {
                if (err)
                    return next(err);
                return res.redirect("/nutre");
            });
        });
    
    }
    else { 
        return res.redirect("/Nutre"); 
    }

};


exports.signOut = function (req, res) 
{
    req.logout();
    res.redirect("/");
}

exports.Bien = function (req, res) 
{
    console.log(req)
    if (!req.user)
        res.send("No tiene acceso");
    else
        res.render("nutre", { user: req.user.firstName });
}

exports.Nutre = function(req, res, next)
{
    if (!req.user)
        res.redirect("/")
    else
        res.render("nutre", {})
}

exports.BuscarTodos = function(req, res, next){
    modelUser.find({}, function (err, docs) {
        if(err)
            return res.send(err);
        else
            return res.send(docs); 
    });
}