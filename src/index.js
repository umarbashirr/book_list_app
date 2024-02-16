import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/config.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 5050;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.error(error));
