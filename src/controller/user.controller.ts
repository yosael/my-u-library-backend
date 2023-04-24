import { Request, Response } from "express";
import UserService from "@/service/user.service";
import jwt from "jsonwebtoken";

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getUserByEmail(req.params.email);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export const findAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.findAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export const findUserByRole = async (req: Request, res: Response) => {
  try {
    const users = await UserService.findUsersByRole(req.params.role);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.login(email, password);
    const token = jwt.sign({ user }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res.status(200).json({
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      token,
    });
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.status(200).json("User logged out");
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};
