import { Router } from "express";
import { calcController } from "../controllers/calcController.js";

const router = Router();

router.get("/calc", calcController.getAll);
router.get("/calc/:id", calcController.getById);
router.post("/calc", calcController.create);

export default router;