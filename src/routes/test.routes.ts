import { Router } from "express";

const testRoutes = Router();

testRoutes.post("/", (req, res) => {
  return res.json({ ok: true });
});

export { testRoutes };
