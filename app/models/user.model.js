
//Modelo Usuario

//Define los campos necesarios para la creacion de usuario
//Usuario = Todas esas personas que tendran acceso al sistema
//para realizar acciones de escritura y lectura, por lo cual los clientes
//de dichos usuarios no aplican como usuarios del sistema.

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Conexión para desarrollo y prueba. 
mongoose.connect("mongodb://localhost/testNutre1");

//Conexión para producción 
//mongoose.connect("mongodb://sasomh:hm25170310@ds064718.mlab.com:64718/nutre"); 

var userModel = new Schema({

    firstName   : { type : String, require : "Debe proporcionar el campo Nombre." },
    lastName    : { type : String, require : "Debe proporcionar el campo Apellido." }, 
    email       : { type : String, require : "Debe proporcionar el campo Email. ", unique: true, dropDups: true  }, 
    dateCreate  : { type : Date, require : "Debe proporcionar el campo.", default: Date() }, 
    userType    : { type : String, enum : ["Basic", "Standar", "Premium"] }, 
    password    : { type : String, require: "Es necesario ingresar el Password", minlength: 5 }

});



userModel.pre("save", function (next) {
    if (this.password) {
        this.password = this.encriptar(this.firstName, this.password); 
    }

    next();
});

userModel.methods.encriptar =  function(user, pass) {
    var crypto = require('crypto');
    var hmac = crypto.createHmac('sha512', user).update(pass).digest('hex');
    return hmac;
};


var User = mongoose.model("User", userModel);

module.exports = User;

