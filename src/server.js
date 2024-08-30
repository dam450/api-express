import express, { json } from "express";

const port = 3333;
const app = express();
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`\n[Server] listening on port ${port}...\n`);
});
