import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import routes from "./routes/routes.js";

dotenv.config();

const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log("server started on port :", process.env.PORT);
});
