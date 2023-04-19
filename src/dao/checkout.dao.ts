import checkoutModel from "@/models/checkout.model";
import { CheckoutRequest } from "@/dto/models.dto";
import BookDao from "./book.dao";
import mongoose from "mongoose";

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
      const checkout = await checkoutModel
        .find({ user: userId })
        .populate("User")
        .populate("Book");
      if (checkout) {
        return checkout.map((checkout) => checkout.toObject());
      } else {
        throw new Error(`Checkouts not found for userId ${userId}`);
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
    const session = await mongoose.startSession();

    try {
      session.startTransaction();
      await BookDao.updateStock(checkout.book, -1, session);
      const newCheckout = await checkoutModel.create(checkout);

      await session.commitTransaction();
      return newCheckout.toObject();
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
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
    } catch (error) {
      throw error;
    }
  }
}
