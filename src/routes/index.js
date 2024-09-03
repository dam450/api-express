import Router from "express";

import { statusRoutes } from "./status.routes.js";
import { testRoutes } from "./test.routes.js";

export const router = new Router();

router.use("/", statusRoutes);
router.use("/test", testRoutes);
