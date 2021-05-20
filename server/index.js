import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(cors());
app.use("/posts", postRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const CONNECTION_URL =
  "mongodb+srv://decidous:decidous@cluster0.sxbjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 27017;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("listening on port 27017")))
  .catch((error) => console.error(error.message));

mongoose.set("useFindAndModify", false);
