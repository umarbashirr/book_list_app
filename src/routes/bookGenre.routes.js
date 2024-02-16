import { Router } from "express";
import {
  createBookGenre,
  deleteBookGenre,
  getAllBookGenre,
  getBookGenreById,
  updateBookGenre,
} from "../controllers/bookGenre.controller.js";

const router = Router();

router.get("/", getAllBookGenre);
router.post("/create", createBookGenre);
router.get("/:id", getBookGenreById);
router.put("/:id", updateBookGenre);
router.delete("/:id", deleteBookGenre);

export default router;
