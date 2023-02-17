import { Schema } from "mongoose";
import { findOneOrCreate } from "./product.statics";

const productSchema = new Schema({
  name: String,
  descriptions: String,
  price: Number,
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  },
  quantity: Number
});

productSchema.statics.findOneOrCreate = findOneOrCreate;
export default productSchema;