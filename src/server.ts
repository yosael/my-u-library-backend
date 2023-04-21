import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "@/routes/book.route";
import checkoutRoutes from "@/routes/checkout.route";
import userRoutes from "@/routes/user.route";

dotenv.config();

mongoose.connect(process.env.DB_CONNECTION!, {
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

const SERVER_PORT = process.env.SERVER_PORT || 3333;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Setup project");
});

app.use("/api", bookRoutes);
app.use("/api", checkoutRoutes);
app.use("/api", userRoutes);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});
