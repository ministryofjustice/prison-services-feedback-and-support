const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sassMiddleware = require("node-sass-middleware");
const nunjucks = require("nunjucks");

const setupStaticContent = require("./setupStaticContent");
const setupSass = require("./setupSass");
const indexRouter = require("./routes/indexRouter");
const feedbackAndSupportRouter = require("./routes/feedbackAndSupportRouter");

const app = express();

nunjucks.configure(["node_modules/govuk-frontend/", "views"], {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(setupStaticContent());
app.use(setupSass());

app.use("/", indexRouter);
app.use("/feedback-and-support", feedbackAndSupportRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
