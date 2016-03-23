require("../models/paciente.model.js");

//Importamos los modelos 
var modelPatient = require("mongoose").model("Patient"),
    modelGeneric = require("mongoose").model("Generic"),
    modelSick = require("mongoose").model("Sick"),
    modelOralLiquids = require("mongoose").model("OralLiquid"),
    modelDrink = require("mongoose").model("Drink"),
    modelVitamin = require("mongoose").model("Vitamin"),
    modelMacronutrient = require("mongoose").model("Macronutrient"),
    modelQuote = require("mongoose").model("Quote"),
    modelMedicaltest = require("mongoose").model("Medicaltest"),
    modelVitalSign = require("mongoose").model("VitalSign");

var passport = require("passport");

exports.NewPatient = function (req, res, next) 
{
    if (!req.user) {
        res.redirect("/");
    }
    else { 
        var patient = new modelPatient({
            owner: req.user.id,
            firstName : req.body.firstName,
            lastName : req.body.lastName, 
            imageUrl : req.body.imageUrl, 
            reasonConsultation : req.body.reasonConsultation 
        });

        patient.save(function (err, patient) {
            if (err) {
                console.log(err)
                return res.send("Algo malo ocurrio");
            }
            else {
                console.log(patient);
                return res.send("Agregado correctamente");
            }
        });
    }

};

exports.Render = function (req, res, next) 
{
    res.render("prueba", {});
}

exports.FindPatients = function (req, res, next) 
{
    if (!req.user) {
        res.send("Error Fatal");
    }
    else {
        modelPatient.find({ owner : req.user.id }, function (err, patients) { 
            if (err)
                return res.send(err);
            else
                return res.send(patients)
        });
    }
    
}