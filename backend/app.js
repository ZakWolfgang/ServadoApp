const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const cors = require("cors");
const { errorHandler } = require("./middlewares/error");
require("dotenv").config();
require("./db");
const userRouter = require("./routes/user");
const restaurantRouter = require("./routes/restaurant");
const reviewRouter = require("./routes/review");
const { handleNotFound } = require("./utils/helper");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/user", userRouter);
app.use("/api/restaurant", restaurantRouter);
app.use("/api/review", reviewRouter);
app.use("/*", handleNotFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
