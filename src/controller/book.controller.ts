import { Request, Response } from "express";
import BookService from "../service/book.service";
import { FindBookBy, FindBookRequest } from "../dto/models.dto";

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await BookService.getBookById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export const getAllBooks = async (_: Request, res: Response) => {
  try {
    const books = await BookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await BookService.createBook(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await BookService.updateBook(req.params.id, req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};

export const findBookBy = async (req: Request, res: Response) => {
  try {
    const by = req.query.by as FindBookBy;
    const value = req.query.value as string;
    const books = await BookService.findBookBy(by, value);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};
