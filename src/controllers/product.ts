import { StatusCodes, ReasonPhrases } from "http-status-codes";
import ProductService from "../services/product";
import {
  successResponse,
  errorResponse,
  logger,
  getPagination,
  getPagingData,
} from "../helpers/index"
import { Request, Response } from "express";
// import { IProductDocument } from "../model/products/product.types";
const { CREATED, NOT_FOUND, OK, BAD_REQUEST, UNAUTHORIZED } = StatusCodes;


const { createProduct, getProduct, getProducts, deleteProduct, updateProduct, totalProductCount } = ProductService


export default class ProductController {
  static async createProduct(req: Request, res: Response) {
    try {
      const { body } = req;
      createProduct(body);
      return successResponse({
        res,
        message: "product created",
        statusCode: CREATED
      })
    } catch (error) {
      logger("error",  error);
      return errorResponse({
        res,
        message: "error while creating product",
      })
    }
  }

  static async getProduct(req: Request, res: Response) {
    try {
      const { product_id } = req.params
      const product = await getProduct(product_id); 
      if (!product) {
        return errorResponse({
          res,
          message: "products not found",
          statusCode: NOT_FOUND
        })
      }
      return successResponse({
        res,
        data: product,
        message: "product fetched",
        statusCode: OK
      })
    } catch (error) {
      logger("error", error)
      errorResponse({
        res,
        message: "we encountered a problem while fetching a product"
      })
    }
  }

  static async deleteProduct(req: Request, res: Response) {
    try {
      const { product_id } = req.params
      const product = await getProduct(product_id);
      console.log("Product: ", product)
      if (!product) {
        return errorResponse({
          res,
          message: "products not found",
          statusCode: NOT_FOUND
        })
      }
      console.log(product_id, 'id')
      await deleteProduct(product_id);
      return successResponse({
        res,
        message: "product deleted",
        statusCode: OK
      })
    } catch (error) {
      console.log("Error: ", error)
      return errorResponse({
        res,
        message: "we encoutered a problem while deleting product"
      })
    }
  }

  static async getProducts(req: Request, res: Response) {
    try {
      const { page, size, queryCondition } = req.query;
      const { limit, offset } = getPagination(Number(page), Number(size));
      const count = await totalProductCount();
      if (!count) {
        throw new Error("no count return")
      }
      const products  = await getProducts();
      if (!count) {
        return errorResponse({
          res,
          message: "products not found",
          statusCode: NOT_FOUND
        })
      }
      let data = {
        count: count,
        rows: products
      }
      const respData = getPagingData(data, Number(page), limit);
      return successResponse({
        res,
        data: respData,
        message: "fetch all products",
        statusCode: OK
      })
    } catch (error) {
      return errorResponse({
        res,
        message: "we encoutered a problem while fetching products"
      })
    }
  }

  static async updateProducts(req: Request, res: Response) {
    try {
      const { product_id} = req.params;
      const product = await getProduct(product_id)
      if (!product) {
        return errorResponse({
          res,
          message: "products not found",
          statusCode: NOT_FOUND
        })
      }
      const body = req.body
      await updateProduct(product_id, body)
      return successResponse({
        res,
        message: "product updated",
        statusCode: OK
      })
    } catch (error) {
      return errorResponse({
        res,
        message: "we encoutered a error while updating product"
      })
    }
  }
}
