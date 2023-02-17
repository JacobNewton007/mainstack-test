import { ProductModel } from "../model/products/product.model";
import { IProduct, IProductDocument } from "../model/products/product.types";

interface updatedField {
  name?: string,
  quantity?: Number,
  price?: Number,
  descriptions?: string
}
class ProductService { 
  async createProduct(product: IProduct): Promise<void> {
    try {
      await ProductModel.create(product)
    } catch (error) {
      throw error
    }
  }

  async getProduct(productId: string): Promise<IProductDocument> {
    try {
      const product = await ProductModel.findById(productId);
      if (!product) {
        throw new Error("no record found")
      }
      return product
    } catch (error) {
      throw error
    }
  }

  async getProducts(): Promise<IProductDocument[]> {
    try {
      const products = await ProductModel.find()
      if (!products) {
        throw new Error("no records found")
      }
      return products
    } catch (error) {
      throw error
    }
  }

  async deleteProduct(productId: string): Promise<void> {
    try {
      await ProductModel.deleteOne({_id: productId});
    } catch (error) {
      throw error
    }
  }

  async updateProduct(productId: string, prod: updatedField): Promise<void> {
    try {
      const product = await ProductModel.findById(productId);
      if (!product) {
        throw new Error("no record found")
      }
      await ProductModel.updateMany({_id: productId}, prod)
    } catch (error) {
      throw error
    }
  }

  async totalProductCount(): Promise<number> {
    try {
      const count = await ProductModel.count()
      if (!count) {
        throw new Error("no record count")
      }
      return count
    } catch (error) {
      throw new Error("no record was found")
    }
  }
}

export default new ProductService()

