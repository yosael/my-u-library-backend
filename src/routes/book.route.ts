import { getBookById } from "../controller/book.controller";
import { getAllBooks } from "../controller/book.controller";
import { createBook } from "../controller/book.controller";
import { updateBook } from "../controller/book.controller";
import { findBookBy } from "../controller/book.controller";
import { verifyToken } from "../controller/security.controller";
import { Router } from "express";

const router = Router();

router.get("/books/:id", verifyToken, getBookById);
router.get("/books", verifyToken, getAllBooks);
router.post("/books", verifyToken, createBook);
router.put("/books/:id", verifyToken, updateBook);
router.get("/books/find", verifyToken, findBookBy);

export default router;
