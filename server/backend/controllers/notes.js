const Note = require("../models/Notes");

export const getNotes = async (req, res, next) => {
  try {
    const notes = await Note.list();
    res.json({ result: notes });
  } catch (err) {
    next(err);
  }
};

export const sendNotes = async (req, res, next) => {
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
};
