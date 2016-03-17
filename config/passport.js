//Archivo de configuracion de passport

//serializacion y deserializacion de usuarios 

var passport = require("passport");
var mongoose = require("mongoose");
require("../app/models/user.model.js");

module.exports = function () 
{
    var User = mongoose.model("User");

    passport.serializeUser(function (user, done) { 
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            if (err) {
                console.log(err);
                done(err);
            }
            else {
                done(null, user);
            }
        });
    });

    require("./strategies/local.js")();
}