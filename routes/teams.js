const express = require("express");
const router = express.Router();
const Teams = require("../models/teams");
require("dotenv").config();

// Get all list of members
router.get("/getAll", async (req, res) => {
  try {
    const listAll = await Teams.find();
    res.status(200).json(listAll);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new member with all mandatory details
router.post("/add", async (req, res) => {
  const obj_body = req.body;

  try {
    if (!obj_body)
      res
        .status(422)
        .json({ msg: `Please enter details to insert the team member record` });
    else {
      const user = new Teams(req.body);
      await user.save();
      res.status(201).json(user);
    }
  } catch (e) {
    console.log("ERROR : ", e);
    res.status(400).send(e);
  }
});

// Update existing member using ID
router.put("/update", async (req, res) => {
  try {
    const { _id } = req.query;
    const user = await Teams.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const { _id } = req.query;
    const user = await Teams.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
