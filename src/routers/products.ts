import { Router } from "express";
import { productsController } from "../controllers";
const router = Router();

router.get("/", productsController.getAllProducts);

router.get("/search", productsController.getSearchedProducts);

router.post("/create", productsController.createProduct);

router.put("/update", productsController.updateProduct);

router.delete("/delete/:_id", productsController.deleteProduct);

export default router;
