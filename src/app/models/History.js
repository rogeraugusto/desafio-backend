const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const HistorySchema = new mongoose.Schema({
  card_number: {
    type: String,
    required: true
  },
  client_id: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  order_id: {
    type: String,
    required: true
  }
});

HistorySchema.plugin(mongoosePaginate);

module.exports = mongoose.model("History", HistorySchema);
