const Note = require("../models/Notes");
var express = require("express");
const { getNotes, sendNotes } = require("../controllers/notes");
var router = express.Router();

router.get("/", async () => {
  getNotes();
});

router.post("/", async () => {
  sendNotes();
});
module.exports = router;
