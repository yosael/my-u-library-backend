import checkoutModel from "@/models/checkout.model";
import { CheckoutRequest } from "@/dto/models.dto";
import mongoose from "mongoose";
import bookModel from "@/models/book.model";

export default class CheckoutDao {
  public static async getCheckoutById(id: string) {
    try {
      const checkout = await checkoutModel
        .findById(id)
        .populate("user", "firstName lastName")
        .populate("book", "title");
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
        .sort({ checkoutDate: -1 })
        .populate("user", "firstName lastName")
        .populate("book", "title");

      return checkout.map((checkout) => checkout.toObject());
    } catch (error) {
      throw error;
    }
  }

  public static async getAllCheckouts() {
    try {
      const checkouts = await checkoutModel
        .find()
        .populate("user", "firstName lastName")
        .populate("book", "title")
        .sort({ checkoutDate: -1 });

      return checkouts.map((checkout) => checkout.toObject());
    } catch (error) {
      throw error;
    }
  }

  public static async createCheckout(checkout: CheckoutRequest) {
    const session = await mongoose.startSession();

    try {
      session.startTransaction();

      const book = await bookModel.findById(checkout.book).session(session);

      if (!book || book.stock < 1) {
        throw new Error("Book not found or out of stock");
      }

      book.stock -= 1;
      await book.save();

      const newCheckout = await checkoutModel.create([checkout], { session });

      await session.commitTransaction();
      await session.endSession();
      return newCheckout[0].toObject();
    } catch (error) {
      await session.abortTransaction();
      await session.endSession();
      throw error;
    }
  }

  public static async updateCheckoutToReturned(id: string) {
    const session = await mongoose.startSession();
    try {
      session.startTransaction();

      const updatedCheckout = await checkoutModel
        .findByIdAndUpdate(
          id,
          { status: "returned", returnDate: new Date() },
          {
            new: true,
            runValidators: true,
            session,
          }
        )
        .populate("user", "firstName lastName")
        .populate("book", "title")
        .session(session);

      if (updatedCheckout) {
        const foundBook = await bookModel.findById(updatedCheckout.book, null, {
          session,
        });

        if (!foundBook) throw new Error("Book not found");

        foundBook.stock += 1;
        await foundBook.save({ session });
        await session.commitTransaction();
        await session.endSession();

        return updatedCheckout.toObject();
      } else {
        throw new Error("Checkout not found");
      }
    } catch (error) {
      await session.abortTransaction();
      await session.endSession();
      throw error;
    }
  }
}
