import { Router } from "express";
import { productsController } from "../controllers";
import { paginateMiddleware } from "../middlewares";
import { ProductModel } from "../models";
const router = Router();

router.get(
  "/",
  paginateMiddleware(ProductModel, "category"),
  productsController.getAllProducts
);

router.get("/search", productsController.getSearchedProducts);

router.post("/create", productsController.createProduct);

router.put("/update", productsController.updateProduct);

router.delete("/delete/:_id", productsController.deleteProduct);

export default router;
