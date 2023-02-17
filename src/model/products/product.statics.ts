import { IProductDocument, IProductModel } from "./product.types";
export async function findOneOrCreate(
  productId: string
): Promise<IProductDocument> {
  const record = await this.findOne({ productId });
  if (record) {
    return record;
  } else {
    return this.create({ productId });
  }
}

// export async function findByAge(
//   min?: number,
//   max?: number
// ): Promise<IUserDocument[]> {
//   return this.find({ age: { $gte: min || 0, $lte: max || Infinity } });
// }