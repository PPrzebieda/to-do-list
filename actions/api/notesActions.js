const NoteModel = require("../../db/models/note");

module.exports = {
  saveNote(req, res) {
    // const note = new NoteModel({
    //   title: "Test title",
    //   description: "Test description",
    // });

    // note
    //   .save()
    //   .then(() => {
    //     console.log("New note created!");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const title = req.body.title;
    const body = req.body.body;
    res.send("save!" + title + body);
  },

  getAllNotes(req, res) {
    res.send("Api works!");
  },
  getNote(req, res) {
    res.send("Info about note");
  },

  updateNote(req, res) {
    const id = req.params.id;
    res.send(`updated ${id}`);
  },
  deleteNote(req, res) {
    const id = req.params.id;
    res.send(`deleted Id: ${id} `);
  },
};
