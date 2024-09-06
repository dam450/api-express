import { Router } from "express";

import { statusRoutes } from "./status.routes";
import { testRoutes } from "./test.routes";

const router = Router();

router.use("/", statusRoutes);
router.use("/test", testRoutes);

export { router };
