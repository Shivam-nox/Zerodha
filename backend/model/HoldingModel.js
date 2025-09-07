//It provide interface to interact with the database.
const {model} = require("mongoose");

const {HoldingSchema} = require('../schemas/HoldingSchema');

const HoldingModel = new model("holding",HoldingSchema);

module.exports = {HoldingModel};