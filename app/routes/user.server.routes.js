
module.exports = function (app) 
{
    user_controller = require("../controllers/user.server.controller.js");
    var passport = require("passport");
    //Peticiones GET 
    app.get("/", function (req, res, next) { 
        res.redirect("/signin");
    });


    app.get("/signin", user_controller.signInRender);

    app.get("/signup", user_controller.signUpRender); 
    
    app.get("/Bien", user_controller.Bien);
    
    app.get("/Nutre", user_controller.Nutre);
    
    app.get("/todos", user_controller.BuscarTodos);
    
    //Peticiones POST
    app.post("/signup", user_controller.signUp);

    app.post("/signin", passport.authenticate('local', 
        {
        failureRedirect: '/', 
        failureFlash    : true
        }),
    function (req, res) {
        res.redirect('/Nutre');
    });

    
}