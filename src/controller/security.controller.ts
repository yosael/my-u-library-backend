import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json("You are not authenticated!");
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json("You are not authenticated!");
    }

    const decodedToken: any = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );
    if (!decodedToken) {
      return res.status(401).json("You are not authenticated!");
    }

    next();
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};
