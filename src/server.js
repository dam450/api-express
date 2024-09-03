import "express-async-errors";
import { config as dotenv } from "dotenv";
import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

import { router } from "./routes/index.js";
import { errorMiddleware } from "./utils/ApiError.js";

dotenv();

const port = process.env.PORT || 3333;
const corsOrigin = process.env.CORS_ORIGIN.split(",") || "*";

const corsOptions = {
  origin: corsOrigin,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
};

const app = express();
app.use(json());
app.use(cors(corsOptions));
app.use(helmet());
app.use(compression({ level: 9 }));
app.use("/api", router);
app.use(errorMiddleware); //must be after routes

app.listen(port, () => {
  console.log(`\n[Server] listening on port ${port}...\n`);
});
