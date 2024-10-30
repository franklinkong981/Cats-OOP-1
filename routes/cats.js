const express = require("express");
const db = require("../db");

const router = new express.Router();

/** get all cats: [{id, name, age}, ...] */
router.get("/", async function (req, res, next) {
  let result = await db.query("SELECT * FROM cats");
  let cats = result.rows;
  return res.json(cats);
});

module.exports = router;