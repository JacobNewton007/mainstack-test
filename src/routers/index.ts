import { Router } from "express";
import { ROUTES } from "../constants/index";
import { invalidRoute, testRoute } from "../helpers/index";
import productRouter from "./product";

const { WILD_CARD, HOME } = ROUTES;

// router for testing if api is live
const testRouter = Router()
testRouter.all(HOME, testRoute)

// Handle api for invalid routes
const invalidRouter = Router()
invalidRouter.all(WILD_CARD, invalidRoute)

const versionOneRouter = [
  testRouter,
  productRouter,
  invalidRouter,
]

export default versionOneRouter;