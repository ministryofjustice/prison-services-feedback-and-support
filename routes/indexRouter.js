const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.redirect("/feedback-and-support"));
router.get("/ping", (req, res) => res.send("pong"));

module.exports = router;
