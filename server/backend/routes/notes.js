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
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    const savedNote = await note.save();
    res.json({
      data: savedNote,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});
module.exports = router;
