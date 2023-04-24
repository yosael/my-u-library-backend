import CheckoutDao from "../dao/checkout.dao";
import {
  CheckoutListResponse,
  CheckoutRequest,
  CheckoutResponse,
} from "@/dto/models.dto";

export default class CheckoutService {
  public static async getCheckoutById(
    id: string
  ): Promise<CheckoutListResponse> {
    try {
      const checkout = await CheckoutDao.getCheckoutById(id);
      return {
        id: checkout._id.toString(),
        user: {
          id: checkout.user._id.toString(),
          name: ((checkout.user.firstName as string) +
            " " +
            checkout.user.lastName) as string,
        },
        book: {
          id: checkout.book._id.toString(),
          title: checkout.book.title as string,
        },
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
  ): Promise<CheckoutListResponse[]> {
    try {
      const checkout = await CheckoutDao.getCheckoutByUser(userId);
      const result = checkout.map((checkout) => {
        return {
          id: checkout._id.toString(),
          user: {
            id: checkout.user._id.toString(),
            name: ((checkout.user.firstName as string) +
              " " +
              checkout.user.lastName) as string,
          },
          book: {
            id: checkout.book._id.toString(),
            title: checkout.book.title as string,
          },
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

  public static async getAllCheckouts(): Promise<CheckoutListResponse[]> {
    try {
      const checkouts = await CheckoutDao.getAllCheckouts();

      const result = checkouts.map((checkout) => {
        return {
          id: checkout._id.toString(),
          user: {
            id: checkout.user._id.toString(),
            name: ((checkout.user.firstName as string) +
              " " +
              checkout.user.lastName) as string,
          },
          book: {
            id: checkout.book._id.toString(),
            title: checkout.book.title as string,
          },
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
        userName: newCheckout.user.name,
        bookId: newCheckout.book._id.toString(),
        bookName: newCheckout.book.name,
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

  public static async returnBook(id: string): Promise<CheckoutListResponse> {
    try {
      const result = await CheckoutDao.updateCheckoutToReturned(id);
      return {
        id: result._id.toString(),
        user: {
          id: result.user._id.toString(),
          name: ((result.user.firstName as string) +
            " " +
            result.user.lastName) as string,
        },
        book: {
          id: result.book._id.toString(),
          title: result.book.title as string,
        },
        status: result.status,
        checkoutDate: new Date(result.checkoutDate.getTime()),
        returnDate: result.returnDate
          ? new Date(result.returnDate.getTime())
          : null,
      };
    } catch (error) {
      throw error;
    }
  }
}
