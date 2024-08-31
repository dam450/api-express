import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";

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

app.get("/", (_, res) => res.json({ message: "server running!" }));

app.listen(port, () => {
  console.log(`\n[Server] listening on port ${port}...\n`);
});
