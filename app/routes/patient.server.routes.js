module.exports = function (app) 
{
    var passport = require("passport");
    var patient_controller = require("../controllers/patient.server.controller.js");
    app.get("/nutre/patients", patient_controller.FindPatients);

    app.post("/nutre/patient/new", patient_controller.NewPatient);

    app.get("/nutre/patient", patient_controller.Render);
}