const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sassMiddleware = require("node-sass-middleware");
const nunjucks = require("nunjucks");

const setupStaticContent = require('./setupStaticContent')
const setupSass = require("./setupSass");
const routes = require('./routes')

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
app.use(setupStaticContent())
app.use(setupSass())
app.use(routes);

module.exports = app;
