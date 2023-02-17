import { model } from "mongoose";
import { IProductDocument } from "./product.types";
import productSchema from "./product.schema";
export const ProductModel = model<IProductDocument>("products", productSchema);