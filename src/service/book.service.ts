import BookDao from "@/dao/book.dao";
import { BookRequest, BookResponse, FindBookBy } from "@/dto/models.dto";

export default class BookService {
  public static async getBookById(id: string): Promise<BookResponse> {
    try {
      const book = await BookDao.getBookById(id);
      const result = {
        id: book._id.toString(),
        title: book.title,
        author: book.author,
        publishedYear: book.publishedYear,
        genre: book.genre,
        stock: book.stock,
      };
      return result;
    } catch (error) {
      throw error;
    }
  }

  public static async getAllBooks(): Promise<BookResponse[]> {
    try {
      const books = await BookDao.getAllBooks();
      const result = books.map((book) => {
        return {
          id: book._id.toString(),
          title: book.title,
          author: book.author,
          publishedYear: book.publishedYear,
          genre: book.genre,
          stock: book.stock,
        };
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  public static async getBooks(): Promise<BookResponse[]> {
    try {
      const books = await BookDao.getBooks();
      const result = books.map((book) => {
        return {
          id: book._id.toString(),
          title: book.title,
          author: book.author,
          publishedYear: book.publishedYear,
          genre: book.genre,
          stock: book.stock,
        };
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  public static async createBook(book: BookRequest): Promise<BookResponse> {
    try {
      const newBook = await BookDao.createBook(book);
      const result = {
        id: newBook._id.toString(),
        title: newBook.title,
        author: newBook.author,
        publishedYear: newBook.publishedYear,
        genre: newBook.genre,
        stock: newBook.stock,
      };
      return result;
    } catch (error) {
      throw error;
    }
  }

  public static async updateBook(
    id: string,
    book: BookRequest
  ): Promise<BookResponse> {
    try {
      const updatedBook = await BookDao.updateBook(id, book);
      const result = {
        id: updatedBook._id.toString(),
        title: updatedBook.title,
        author: updatedBook.author,
        publishedYear: updatedBook.publishedYear,
        genre: updatedBook.genre,
        stock: updatedBook.stock,
      };
      return result;
    } catch (error) {
      throw error;
    }
  }

  public static async findBookBy(by: FindBookBy, value: string) {
    try {
      const books = await BookDao.findBookBy(by, value);
      const result = books.map((book) => {
        return {
          id: book._id.toString(),
          title: book.title,
          author: book.author,
          publishedYear: book.publishedYear,
          genre: book.genre,
          stock: book.stock,
        };
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
