const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const NoteModel = mongoose.model("notes", noteSchema);

module.exports = NoteModel;
