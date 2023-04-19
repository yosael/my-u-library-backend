import CheckoutDao from "@/dao/checkout.dao";
import { CheckoutRequest, CheckoutResponse } from "@/dto/models.dto";
import userModel from "@/models/user.model";

export default class CheckoutService {
  public static async getCheckoutById(id: string): Promise<CheckoutResponse> {
    try {
      const checkout = await CheckoutDao.getCheckoutById(id);
      return {
        id: checkout._id.toString(),
        userId: checkout.user._id.toString(),
        bookId: checkout.book._id.toString(),
        status: checkout.status,
        checkoutDate: new Date(checkout.checkoutDate.getTime()),
        returnDate: checkout.returnDate
          ? new Date(checkout.returnDate.getTime())
          : null,
      };
    } catch (error) {
      throw error;
    }
  }

  public static async getCheckoutByUser(
    userId: string
  ): Promise<CheckoutResponse[]> {
    try {
      const checkout = await CheckoutDao.getCheckoutByUser(userId);
      const result = checkout.map((checkout) => {
        return {
          id: checkout._id.toString(),
          userId: checkout.user._id.toString(),
          bookId: checkout.book._id.toString(),
          status: checkout.status,
          checkoutDate: new Date(checkout.checkoutDate.getTime()),
          returnDate: checkout.returnDate
            ? new Date(checkout.returnDate.getTime())
            : null,
        };
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  public static async getAllCheckouts(): Promise<CheckoutResponse[]> {
    try {
      const checkouts = await CheckoutDao.getAllCheckouts();
      const result = checkouts.map((checkout) => {
        return {
          id: checkout._id.toString(),
          userId: checkout.user._id.toString(),
          bookId: checkout.book._id.toString(),
          status: checkout.status,
          checkoutDate: new Date(checkout.checkoutDate.getTime()),
          returnDate: checkout.returnDate
            ? new Date(checkout.returnDate.getTime())
            : null,
        };
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  public static async createCheckout(
    checkout: CheckoutRequest
  ): Promise<CheckoutResponse> {
    try {
      const newCheckout = await CheckoutDao.createCheckout(checkout);
      const result = {
        id: newCheckout._id.toString(),
        userId: newCheckout.user._id.toString(),
        bookId: newCheckout.book._id.toString(),
        status: newCheckout.status,
        checkoutDate: new Date(newCheckout.checkoutDate.getTime()),
        returnDate: newCheckout.returnDate
          ? new Date(newCheckout.returnDate.getTime())
          : null,
      };
      return result;
    } catch (error) {
      throw error;
    }
  }
}
