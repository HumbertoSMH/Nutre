
module.exports = function (app) 
{
    user_controller = require("../controllers/user.server.controller.js");

    //Peticiones GET 
    app.get("/", function (req, res, next) { 
        res.redirect("/signin");
    });


    app.get("/signin", user_controller.signInRender);

    app.get("/signup", user_controller.signUpRender); 
    
    
    //Peticiones POST
    app.post("/signup", user_controller.signUp); 
}