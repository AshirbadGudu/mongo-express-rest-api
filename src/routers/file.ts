import { Router } from "express";
import { fileController } from "../controllers";
const router = Router();

router.post("/upload", fileController.upload);

export default router;
