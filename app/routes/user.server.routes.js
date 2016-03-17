
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
    
<<<<<<< HEAD
    app.get("/Bien", user_controller.Bien);
    
    
    //Peticiones POST
    app.post("/signup", user_controller.signUp);

    app.post("/signin", passport.authenticate('local', 
        {
        failureRedirect: '/', 
        failureFlash    : true
        }),
    function (req, res) {
        res.redirect('/Bien');
    });

    
=======
    app.get("/Bien", user_controller.Bien); 
    //Peticiones POST
    app.post("/signup", user_controller.signUp);

    app.post("/signin", passport.authenticate('local', { failureRedirect: '/' }),
  function (req, res) {
        res.redirect('/Bien');
    }); 
>>>>>>> origin/master
}