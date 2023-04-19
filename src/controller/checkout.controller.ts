import { Request, Response } from "express";
import CheckoutService from "@/service/checkout.service";

export const getCheckoutById = async (req: Request, res: Response) => {
  try {
    const checkout = await CheckoutService.getCheckoutById(req.params.id);
    res.status(200).json(checkout);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export const getAllCheckouts = async (_: Request, res: Response) => {
  try {
    const checkouts = await CheckoutService.getAllCheckouts();
    res.status(200).json(checkouts);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export const createCheckout = async (req: Request, res: Response) => {
  try {
    const checkout = await CheckoutService.createCheckout(req.body);
    res.status(200).json(checkout);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export const returnBook = async (req: Request, res: Response) => {
  try {
    const checkout = await CheckoutService.returnBook(req.params.id);
    res.status(200).json(checkout);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};
