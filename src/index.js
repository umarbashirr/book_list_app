import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 5050;

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
