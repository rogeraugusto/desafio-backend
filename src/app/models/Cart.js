const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  cart_id: {
    type: String,
    required: true
  },
  client_id: {
    type: String,
    required: true
  },
  product_id: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Cart", CartSchema);
