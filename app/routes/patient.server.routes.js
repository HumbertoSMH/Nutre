var express = require("express");
var routes = express.Router();
var passport = require("passport");
var patient_controller = require("../controllers/patient.server.controller.js");
/* GET */

routes.route("/all")
    .get(patient_controller.FindPatients);

routes.route("/new")
    .post(patient_controller.NewPatient);

routes.route("/:id")
    .get(patient_controller.FindPatientById)
    .put(patient_controller.UpdatePatient)
    .delete(patient_controller.DeletePatient);

module.exports = routes;


/*
module.exports = function (app)
{
    var passport = require("passport");
    var patient_controller = require("../controllers/patient.server.controller.js");
    app.get("/nutre/patients", patient_controller.FindPatients);

    app.post("/nutre/patient/new", patient_controller.NewPatient);

    app.get("/nutre/patient", patient_controller.Render);

}*/
