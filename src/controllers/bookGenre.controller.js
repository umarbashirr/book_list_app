import BookGenre from "../models/bookGenre.model.js";
import { ApiResponse } from "../utils/apiResponse.js";

export const getAllBookGenre = async (req, res) => {
  try {
    const bookGenre = await BookGenre.find();
    res
      .status(200)
      .json(new ApiResponse(200, "Book Genre fetched successfully", bookGenre));
  } catch (error) {
    res
      .status(500)
      .json(
        new ApiResponse(
          500,
          "Error while fetching book genre",
          null,
          error.message
        )
      );
  }
};

export const getBookGenreById = async (req, res) => {
  const { id } = req.params;

  try {
    const bookGenre = await BookGenre.findById(id);

    if (!bookGenre) {
      return res
        .status(404)
        .json(new ApiResponse(404, "Book Genre not found", null));
    }

    res
      .status(200)
      .json(new ApiResponse(200, "Book Genre fetched successfully", bookGenre));
  } catch (err) {
    res
      .status(500)
      .json(
        new ApiResponse(
          500,
          "Error while fetching book genre",
          null,
          err.message
        )
      );
  }
};

export const createBookGenre = async (req, res) => {
  const { title, description } = req.body;

  try {
    if (!title.trim()) {
      return res
        .status(400)
        .json(new ApiResponse(400, "Title is required", null));
    }

    if (title.trim().length < 3) {
      return res
        .status(400)
        .json(
          new ApiResponse(400, "Title must be at least 3 characters", null)
        );
    }

    const bookGenre = new BookGenre({
      title,
      description,
    });

    const uploadedBookGenre = await bookGenre.save();

    res
      .status(201)
      .json(new ApiResponse(201, "Book Genre created", uploadedBookGenre));
  } catch (err) {
    res
      .status(500)
      .json(
        new ApiResponse(
          500,
          "Error while creating book genre",
          null,
          err.message
        )
      );
  }
};

export const updateBookGenre = async (req, res) => {
  const { id } = req.params;

  const { title, description } = req.body;

  try {
    const bookGenre = await BookGenre.findById(id);

    if (!bookGenre) {
      return res
        .status(404)
        .json(new ApiResponse(404, "Book Genre not found", null));
    }

    if (!title.trim()) {
      return res
        .status(400)
        .json(new ApiResponse(400, "Title is required", null));
    }

    if (title.trim().length < 3) {
      return res
        .status(400)
        .json(
          new ApiResponse(400, "Title must be at least 3 characters", null)
        );
    }

    bookGenre.title = title;
    bookGenre.description = description;

    const updatedBookGenre = await bookGenre.save();

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          "Book Genre updated successfully",
          updatedBookGenre
        )
      );
  } catch (err) {
    res
      .status(500)
      .json(
        new ApiResponse(
          500,
          "Error while updating book genre",
          null,
          err.message
        )
      );
  }
};

export const deleteBookGenre = async (req, res) => {
  const { id } = req.params;

  try {
    const bookGenre = await BookGenre.findByIdAndDelete(id);

    if (!bookGenre) {
      return res
        .status(404)
        .json(new ApiResponse(404, "Book Genre not found", null));
    }

    res
      .status(200)
      .json(new ApiResponse(200, "Book Genre deleted successfully", bookGenre));
  } catch (err) {
    res
      .status(500)
      .json(
        new ApiResponse(
          500,
          "Error while deleting book genre",
          null,
          err.message
        )
      );
  }
};
