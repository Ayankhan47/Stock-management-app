const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    SL: { type: Number, required: true },
    id: { type: String, required: true, unique: true }, // URL slug
    CODE: { type: String, required: true, trim: true },
    MODEL_NAME: { type: String, required: true, trim: true },
    COLOUR: { type: String, required: true, trim: true },
    CHASSIS_NO: { type: String, required: true, unique: true, trim: true },
    ENGINE_NO: { type: String, required: true, unique: true, trim: true },
    LOCATION: { type: String, enum: ["SHOWROOM", "GODOWN 1"], required: true },
    price: { type: String, required: true },
    img: { type: String, required: true },
    cat: { type: String },
    description: { type: String }
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
