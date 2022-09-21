"use strict";
const mongoose = require("mongoose");
const Schema = require("mongoose");

// CREO EL ESQUEMA
const noteSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },

  date: String,
});

// Creamos metodo estatico

noteSchema.statics.list = function () {
  const query = Note.find();
  return query.exec();
};

// CREO MODELO
const Note = mongoose.model("Note", noteSchema);

// EXPORTO EL MODELO
module.exports = Note;
