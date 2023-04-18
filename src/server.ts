import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 3333;

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Setup project");
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});
