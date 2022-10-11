var cookieParser = require("cookie-parser");
var createError = require("http-errors");
var express = require("express");
var logger = require("morgan");
const cors = require("cors");
var path = require("path");
require("dotenv").config();

const notesRouter = require("./routes/notes");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const app = express();
require("./data/connect_mongodb");

// Config
// Middleware
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(logger("dev"));
app.use(cors());

// API v1 routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/v1/notes", notesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
