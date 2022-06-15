import { Router } from "express";
import { usersController } from "../controllers";
const router = Router();

router.get("/", usersController.getAllUsers);

router.get("/search", usersController.getSearchedUsers);

router.post("/create", usersController.createUser);

router.put("/update", usersController.updateUser);

router.delete("/delete/:_id", usersController.deleteUser);

export default router;
