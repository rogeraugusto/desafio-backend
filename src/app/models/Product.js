const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
    unique: true
  },
  artist: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  album: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  store: {
    type: String,
    required: true
  },
  thumb: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

ProductSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Product", ProductSchema);
