"use strict";

const mongoose = require("mongoose");

// definir un esquema)
const blogSchema = mongoose.Schema(
  {},
  {
    collection: "noteblock",
  }
);

// creo el modelo con ese esquema
const Noteblock = mongoose.model("Noteblock", blogSchema);

// opcional exportar modelo
module.exports = Noteblock;
