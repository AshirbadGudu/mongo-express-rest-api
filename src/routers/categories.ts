import { Router } from "express";
import { categoryController } from "../controllers";
import { paginateMiddleware } from "../middlewares";
import { CategoryModel } from "../models";
const router = Router();

router.get(
  "/",
  paginateMiddleware(CategoryModel),
  categoryController.getAllCategory
);

router.get("/search", categoryController.getSearchedCategory);

router.post("/create", categoryController.createCategory);

router.put("/update", categoryController.updateCategory);

router.delete("/delete/:_id", categoryController.deleteCategory);

export default router;
