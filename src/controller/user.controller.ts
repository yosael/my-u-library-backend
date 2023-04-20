import { Request, Response } from "express";
import UserService from "@/service/user.service";

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
