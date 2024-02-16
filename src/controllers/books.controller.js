import Book from "../models/books.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    if (books.length === 0) {
      return res.status(404).json(new ApiResponse(404, "No books found", null));
    }

    res
      .status(200)
      .json(new ApiResponse(200, "Books fetched successfully", books));
  } catch (error) {
    res
      .status(500)
      .json(
        new ApiResponse(500, "Error while fetching books", null, error.message)
      );
  }
};

export const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json(new ApiResponse(404, "Book not found", null));
    }

    res
      .status(200)
      .json(new ApiResponse(200, "Book fetched successfully", book));
  } catch (error) {
    res
      .status(500)
      .json(
        new ApiResponse(500, "Error while fetching book", null, error.message)
      );
  }
};

export const createBook = async (req, res) => {
  const {
    title,
    author,
    description,
    genre,
    publicationYear,
    ISBN,
    publisher,
    language,
    numberOfPages,
    isAvailable,
  } = req.body;

  try {
    if (
      !title.trim() ||
      !author.trim() ||
      !description.trim() ||
      !genre.trim() ||
      !publicationYear.trim() ||
      !ISBN.trim() ||
      !publisher.trim() ||
      !language.trim() ||
      !numberOfPages.trim() ||
      !isAvailable.trim()
    ) {
      return res
        .status(400)
        .json(new ApiResponse(400, "All fields are required", null));
    }

    const newBook = new Book({
      title,
      author,
      description,
      genre,
      publicationYear,
      ISBN,
      publisher,
      language,
      numberOfPages,
      isAvailable,
    });

    const savedBook = await newBook.save();

    res
      .status(201)
      .json(new ApiResponse(201, "Book created successfully", savedBook));
  } catch (error) {
    res
      .status(500)
      .json(
        new ApiResponse(500, "Error while creating book", null, error.message)
      );
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;

  const {
    title,
    author,
    description,
    genre,
    publicationYear,
    ISBN,
    publisher,
    language,
    numberOfPages,
    isAvailable,
  } = req.body;

  try {
    if (
      !title.trim() ||
      !author.trim() ||
      !description.trim() ||
      !genre.trim() ||
      !publicationYear.trim() ||
      !ISBN.trim() ||
      !publisher.trim() ||
      !language.trim() ||
      !numberOfPages.trim() ||
      !isAvailable.trim()
    ) {
      return res
        .status(400)
        .json(new ApiResponse(400, "All fields are required", null));
    }

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json(new ApiResponse(404, "Book not found", null));
    }

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        title,
        author,
        description,
        genre,
        publicationYear,
        ISBN,
        publisher,
        language,
        numberOfPages,
        isAvailable,
      },
      { new: true }
    );

    res
      .status(200)
      .json(new ApiResponse(200, "Book updated successfully", updatedBook));
  } catch (error) {
    res
      .status(500)
      .json(
        new ApiResponse(500, "Error while updating book", null, error.message)
      );
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).json(new ApiResponse(404, "Book not found", null));
    }

    res
      .status(200)
      .json(new ApiResponse(200, "Book deleted successfully", null));
  } catch (error) {
    res
      .status(500)
      .json(
        new ApiResponse(500, "Error while deleting book", null, error.message)
      );
  }
};
