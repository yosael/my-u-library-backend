import checkoutModel from "@/models/checkout.model";
import { CheckoutRequest } from "@/dto/models.dto";

export default class CheckoutDao {
  public static async getCheckoutById(id: string) {
    try {
      const checkout = await checkoutModel.findById(id);
      if (checkout) {
        return checkout.toObject();
      } else {
        throw new Error("Checkout not found");
      }
    } catch (error) {
      throw error;
    }
  }

  public static async getCheckoutByUser(userId: string) {
    try {
      const checkout = await checkoutModel.find({ user: userId });
      if (checkout) {
        return checkout.map((checkout) => checkout.toObject());
      } else {
        throw new Error("Checkout not found");
      }
    } catch (error) {
      throw error;
    }
  }

  public static async getAllCheckouts() {
    try {
      const checkouts = await checkoutModel.find();
      return checkouts.map((checkout) => checkout.toObject());
    } catch (error) {
      throw error;
    }
  }

  public static async createCheckout(checkout: CheckoutRequest) {
    try {
      const newCheckout = await checkoutModel.create(checkout);
      return newCheckout.toObject();
    } catch (error) {
      throw error;
    }
  }

  public static async updateCheckoutToReturned(id: string) {
    try {
      const updatedCheckout = await checkoutModel.findByIdAndUpdate(
        id,
        { status: "returned" },
        {
          new: true,
          runValidators: true,
        }
      );
      if (updatedCheckout) {
        return updatedCheckout.toObject();
      } else {
        throw new Error("Checkout not found");
      }
    } catch (error) {}
  }
}
