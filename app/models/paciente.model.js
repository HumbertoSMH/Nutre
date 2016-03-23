// Modelo de pacientes

//Define los campos de
//la entrevista nutrimental mas no las citas 

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//mongoose.connect("mongodb://localhost/testNutre1");

var Options = ["Alto", "Bajo", "Medio"];
var OptionsInterpretation = ["Excesivo", "Adecuado", "Insuficiente", "Inadecuado"];

//Modelo de las enfermedades que puede o tuvo el paciente 
//o alguno de sus familiares.
var modelSicks = new Schema({
    name        : { type: String },
    description : {type: String}
});

//Modelo de los liquidos ingeridos por la comida y por liquidos
var modelOralLiquids = new Schema({
    type        : { type: String }, 
    quantity    : { type: Number}
});

//Modelo de liquidos referente a la cafeina. 
var modelDrinks = new Schema({
    name     : { type: String }, 
    caffeine : { type: Number }, 
    quantity : { type : Number}
});

//MOdelo usado para las vitaminas y nutrientes inorganicos. 
var modelVitamins = new Schema({
    name        : { type: String }, 
    ingestion   : { type: String }, 
    idealValue  : { type: String }, 
    adecuation  : { type: String }, 
    interpretation : {type: String}   
});

//Modelo de macronutrientes 
var modelMacronutrients = new Schema({
    name: { type: String },
    ingestion : { type: Number },
    kcal : { type: Number },
    percentage : { type: Number }, 
    ingestionInterpretation : { type: Number },
    kcalInterpretation : { type: Number }, 
    percentageInterpretation: { type: Number }, 
    Interpretation : { type: String, enum : OptionsInterpretation} 
});

//Modelo Generico para arreglos de tipo JSON con nombre y valor
var modelGeneric = new Schema({
    name : { type: String },
    value: { type: String },
    nameOfCategorie : {type: String}
});

//Modelo para medidas Antropometricas cambia con respecto al 
var modelAnthropometricMeasures = new Schema({
    name  : { type: String }, 
    value : { type: Number} 
});

//Modelo para el array de las citas del paciente 
var modelQuotes = new Schema({
    dateQuote : { type: Date, default: Date() },
    measures  : [modelAnthropometricMeasures]
});

//Modelo de las pruebas Medicas 
var modelMedicaltest = new Schema({
    name            : { type: String }, 
    referencieValue : { type: String }, 
    result          : { type: Number}, 
    interpretation  : { type: String}
});

//Modelo de los signos vitales
var modelVitalSigns = new Schema({
    indicator : { type: String }, 
    now       : { type: String }, 
    unit      : { type: String },
    ideal     : { type: Number },
    interpretation : {type: String}  
});
//Modelo principal pobla ciertas propiedades de los otros modelos.
var pacienteModel = new Schema({
    owner       : { type: String },
    firstName   : { type : String, required : "El campo es requerido" },
    lastName    : { type : String, required : "El campo es requerido" },
    dateCreated : { type: Date, default: Date() }, 
    imageUrl    : { type: String , default : "http://placehold.it/150x150" },
    reasonConsultation : String,
    personalHistoy : 
    {
        sex         : { type: String, enum: ["Masculino", "Femenino"] }, 
        age         : { type: Number }, 
        languaje    : { type: String},
        literacy    : { type: String}, 
        education   : { type: String}, 
        familyRol   : { type: String}, 
        smoke       : { type: String},
        mobility    : { type: String}, 
        disability  : String
    }, 
    socialHistory :
    {
        socieconomicFactors     : { type: String, enum: Options }, 
        lifeSituation           : { type: String, enum: Options },
        domesticSituation       : { type: String }, 
        socialOrMedicalSupport  : { type: String}, 
        job                     : { type: String }, 
        religion                : { type: String }, 
        crisis                  : { type: String }, 
        stressLeves             : 
        {
            level         : { type: Number }, 
            stressCouses  : {type : String}
        } 
    },
    medicalRecord      : [modelSicks], 
    oralLiquids        : [modelOralLiquids], 
    foodIntake         : { type: String }, 
    foodVariety        : { type: String }, 
    bioactiveSubstances: 
    {
        alcohol        : { type: String },
        caffeine       : { type: String }, 
        drinks         : [modelDrinks],
        idealValue     : { type: Number }, 
        interpretationOfCaffeine: { type: String },  
    },
    macronutrients : [modelMacronutrients], 
    vitamins       : [modelVitamins],
    inorganic      : [modelVitamins], 
    dietaryExperience : [modelGeneric], 
    medicines      : [modelGeneric], 
    attitudes      : [modelGeneric],
    behavior       : [modelGeneric], 
    accessToFood   : [modelGeneric], 
    physicalActivity : [modelGeneric],
    quotes         : [modelQuotes], 
    medicalTest    : [modelMedicaltest], 
    physicalFindings : [modelGeneric], 
    vitalSigns     :  [modelVitalSigns]
});

var Patient = mongoose.model("Patient", pacienteModel);
var Generic = mongoose.model("Generic", modelGeneric);
var Sick = mongoose.model("Sick", modelSicks);
var OralLiquid = mongoose.model("OralLiquid", modelOralLiquids);
var Drink = mongoose.model("Drink", modelDrinks);
var Vitamin = mongoose.model("Vitamin", modelVitamins);
var Macronutrient = mongoose.model("Macronutrient", modelMacronutrients);
var Quote = mongoose.model("Quote", modelQuotes);
var MedicalTest = mongoose.model("Medicaltest", modelMedicaltest);
var VitalSign = mongoose.model("VitalSign", modelVitalSigns);

module.exports = Patient;
module.exports = Generic;
module.exports = Sick;
module.exports = OralLiquid;
module.exports = Drink;
module.exports = Vitamin;
module.exports = Macronutrient;
module.exports = Quote;
module.exports = MedicalTest;
module.exports = VitalSign; 