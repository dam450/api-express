import { Router } from "express";
import { StatusController } from "../controllers/StatusController";

const statusController = new StatusController();

const statusRoutes = Router();

statusRoutes.get("/", statusController.index);

export { statusRoutes };
