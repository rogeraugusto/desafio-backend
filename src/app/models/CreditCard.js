const mongoose = require("mongoose");

const CreditCardSchema = new mongoose.Schema({
  card_number: {
    type: String,
    required: true
  },
  card_holder_name: {
    type: String,
    required: true
  },
  cvv: {
    type: Number,
    required: true
  },
  exp_date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("CreditCard", CreditCardSchema);
