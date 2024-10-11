import express from "express";
import dotenv from "dotenv";
// const colors = require("colors");
// const morgan = require("morgan");
import { connectToMongoDb } from "./lib/mongo.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// middlewares
app.use(express.json());
app.use(cors());
// app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  connectToMongoDb();
  console.log(`Server running at port ${port}`);
  //   routes(app);
});
