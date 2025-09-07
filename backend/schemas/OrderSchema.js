// schemas/OrderSchema.js
const { Schema } = require("mongoose");

const OrderSchema = new Schema({
  name: String,
  price: Number,
  qty: Number,
  mode: String,
});

// ✅ Export the schema directly     
module.exports = { OrderSchema};
