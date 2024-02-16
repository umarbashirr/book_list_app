import { mongoose, Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    genre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BookGenre",
    },
    publicationYear: {
      type: Number,
      required: true,
    },
    ISBN: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    numberOfPages: {
      type: Number,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Book = model("Book", bookSchema);

export default Book;
