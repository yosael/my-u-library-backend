import { getBookById } from "@/controller/book.controller";
import { getAllBooks } from "@/controller/book.controller";
import { createBook } from "@/controller/book.controller";
import { updateBook } from "@/controller/book.controller";
import { findBookBy } from "@/controller/book.controller";
import { Router } from "express";

const router = Router();

router.get("/books:id", getBookById);
router.get("/books", getAllBooks);
router.post("/books", createBook);
router.put("/books:id", updateBook);
router.post("books/find", findBookBy);

export default router;
