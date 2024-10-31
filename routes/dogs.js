const express = require("express");
const router = new express.Router();
const db = require("../db");
const Dog = require("../models/dog");

router.get("/", async function (req, res, next) {
  let dogs = await Dog.getAll();
  return res.json(dogs);
});

router.get("/:id", async function (req, res, next) {
  try {
    let dog = await Dog.getById(req.params.id);
    return res.json(dog);
  } catch(e) {
    return next(e);
  }
});

router.post("/", async function (req, res, next) {
  try {
    const {name, age} = req.body;
    let dog = await Dog.create(name, age);
    return res.json(dog);
  } catch(e) {
    return next(e);
  }
});

router.patch("/:id/age", async function (req, res, next) {
  try {
    let dog = await Dog.getById(req.params.id);
    dog.age += 1;
    await dog.save();
    return res.json({dog});
  } catch(e) {
    return next(e);
  }
});

router.patch("/:id/rename", async function (req, res, next) {
  try {
    let dog = await Dog.getById(req.params.id);
    dog.name = req.body.name;
    await dog.save();
    return res.json({dog});
  } catch(e) {
    return next(e);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    let dog = await Dog.getById(req.params.id);
    await dog.remove();
    return res.json({msg: "deleted"});
  } catch(e) {
    return next(e);
  }
});

module.exports = router;