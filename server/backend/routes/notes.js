const Note = require("../models/Notes");
var express = require("express");
// const { getNotes, sendNotes } = require("../controllers/notes");
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const notes = await Note.list();
    res.json({ result: notes });
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const noteData = req.body;
    const date = new Date();
    noteData.date = date;
    const note = new Note(noteData);
    const savednote = await note.save();
    res.status(201).json({ result: savednote });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
