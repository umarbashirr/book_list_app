import { Router } from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "../controllers/books.controller.js";

const router = Router();

router.route("/").get(getAllBooks);
router.route("/:id").get(getBookById);
router.route("/").post(createBook);
router.route("/:id").put(updateBook);
router.route("/:id").delete(deleteBook);

export default router;
