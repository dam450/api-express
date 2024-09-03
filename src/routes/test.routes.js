import { Router } from "express";
import { NotFoundError } from "../utils/ApiError.js";

const testRoutes = Router();

testRoutes.post("/", (req, res) => {
  return res.json({ ok: true });
});

export { testRoutes };
