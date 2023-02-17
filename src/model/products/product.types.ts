import { Document, Model } from "mongoose";
export interface IProduct {
  name: String,
  descriptions: String;
  price: Number;
  dateOfEntry?: Date;
  lastUpdated?: Date;
  quantity: Number
}

export interface IProductModel extends Model<IProductDocument> {
  findOneOrCreate: (
    {
      name,
      descriptions,
      price,
      quantity
    }: { name: string; descriptions: string; price: number, quantity: number }
  ) => Promise<IProductDocument>;
  // findByAge: (
  //   min?: number,
  //   max?: number
  // ) => Promise<IUserDocument[]>;
}
export interface IProductDocument extends IProduct, Document {}
export interface IProductModel extends Model<IProductDocument> {}