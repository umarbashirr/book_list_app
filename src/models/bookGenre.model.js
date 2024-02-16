import { Schema, model } from "mongoose";

const bookGenreSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const BookGenre = model("BookGenre", bookGenreSchema);

export default BookGenre;
