import { config as dotenv } from "dotenv";
import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

dotenv();

const port = 3333;
const corsOptions = {
  origin: ["http://localhost:3000"],
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

app.listen(port, () => {
  console.log(`\n[Server] listening on port ${port}...\n`);
});
