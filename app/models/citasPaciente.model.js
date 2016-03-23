//Modelo para las citas de los pacientes se ingresa mediante ID 

var mongoose = requiere("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/testNutre1");

var ModelQuote = new Schema({
    owner : { type: String },
    patientFullName : { type : String },
    date : { type: date, default: Date() }, 
    reason : {type: String}
});

var Quote = mongoose.model("Quote", ModelQuote);

module.exports = Quote; 