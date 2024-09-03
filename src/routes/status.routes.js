import { Router } from "express";
import { StatusController } from "../controllers/StatusController.js";

const statusController = new StatusController();

export const statusRoutes = Router();

statusRoutes.get("/", statusController.index);
