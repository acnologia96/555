const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema(
  {
    name: { type: String,text:true },
    description: { type: String },
    price: { type: Number },
    quantity: { type: Number },
  },
);
module.exports = Product = mongoose.model("item_data", ProductSchema);
