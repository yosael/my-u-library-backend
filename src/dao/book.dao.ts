import { BookRequest, FindBookBy } from "@/dto/models.dto";
import bookModel from "@/models/book.model";

export default class BookDao {
  public static async getBookById(id: string) {
    try {
      const book = await bookModel.findById(id);
      if (book) {
        return book.toObject();
      } else {
        throw new Error("Book not found");
      }
    } catch (error) {
      throw error;
    }
  }

  public static async getBooks() {
    try {
      const books = await bookModel.find();
      return books.map((book) => book.toObject());
    } catch (error) {
      throw error;
    }
  }

  public static async createBook(book: BookRequest) {
    try {
      const newBook = await bookModel.create(book);
      return newBook.toObject();
    } catch (error) {
      throw error;
    }
  }

  public static async updateBook(id: string, book: BookRequest) {
    try {
      const updatedBook = await bookModel.findByIdAndUpdate(id, book, {
        new: true,
        runValidators: true,
      });
      if (updatedBook) {
        return updatedBook.toObject();
      } else {
        throw new Error("Book not found");
      }
    } catch (error) {
      throw error;
    }
  }

  public static async findBookBy(by: FindBookBy, value: string) {
    try {
      const query = { [by]: { $regex: value, $options: "i" } };

      const books = await bookModel.find(query);
      return books.map((book) => book.toObject());
    } catch (error) {
      throw error;
    }
  }
}
