import { Router } from "express";
import { ROUTES } from "../constants/index";
import ProductController from "../controllers/product";
import { validateProduct } from "../middlewares/product";
const {
  GETPRODUCT,
  CREATEPRODUCT,
  GETPRODUCTS,
  DELETEPRODUCT,
  UPDATEPRODUCT
} = ROUTES

const { 
  getProduct,
  createProduct,
  getProducts,
  deleteProduct,
  updateProducts
} = ProductController;


const productRouter = Router()

productRouter.get(
  GETPRODUCT,
  getProduct
);

productRouter.post(
  CREATEPRODUCT,
  validateProduct,
  createProduct
);

productRouter.get(
  GETPRODUCTS,
  getProducts
);

productRouter.patch(
  UPDATEPRODUCT,
  updateProducts
);

productRouter.delete(
  DELETEPRODUCT,
  deleteProduct
)

export default productRouter