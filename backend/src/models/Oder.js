const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  table: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["PENDING", "PREPARING", "DONE"],
    default: "pending",
  },
});

module.exports = mongoose.model("Order", OrderSchema);
