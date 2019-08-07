const mongoose = require("mongoose");
const CreditCard = require("./CreditCard").schema;

const TransactionSchema = new mongoose.Schema({
  client_id: {
    type: String,
    required: true
  },
  cart_id: {
    type: String,
    required: true
  },
  client_name: {
    type: String,
    required: true
  },
  value_to_pay: {
    type: Number,
    required: true
  },
  credit_card: {
    type: CreditCard,
    ref: "CreditCard",
    required: true
  }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
