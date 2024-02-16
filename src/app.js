import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import bookGenreRoutes from "./routes/bookGenre.routes.js";
import bookRoutes from "./routes/books.routes.js";

app.use("/api/v1/book-genre", bookGenreRoutes);
app.use("/api/v1/books", bookRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    success: true,
    message: "Welcome to Book Genre API",
    data: null,
  });
});

export { app };
