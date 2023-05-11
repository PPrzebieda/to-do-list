const NoteModel = require("../../db/models/note");

module.exports = {
  saveNote(req, res) {
    const note = new NoteModel({
      title: "Test title",
      description: "Test description",
    });

    note
      .save()
      .then(() => {
        console.log("New note created!");
      })
      .catch((error) => {
        console.log(error);
      });

    res.send("Strona główna działa!");
  },
};
