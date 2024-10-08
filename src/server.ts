import "express-async-errors";
import compression from "compression";
import cors from "cors";
import { config as dotenv } from "dotenv";
import express, { json } from "express";
import helmet from "helmet";

import { router } from "./routes";
import { errorMiddleware } from "./utils/ApiError";

dotenv();

const port = process.env.PORT || 3333;
const corsOrigin = process.env.CORS_ORIGIN?.split(",") ?? "*";

console.info({ "[Environment config]": { port, corsOrigin } });

const corsOptions = {
  origin: corsOrigin,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
} satisfies cors.CorsOptions;

const app = express();
app.use(json({ limit: "50kb" }));
app.use(cors(corsOptions));
app.use(helmet());
app.use(compression({ level: 9 }));
app.use("/api/v1", router);
app.use(errorMiddleware); //must be after routes
app.get("/", (_, res) => res.redirect("/api/v1"));

app.listen(port, () => {
  console.log(`\n[Server] listening on port ${port}\n`);
});
