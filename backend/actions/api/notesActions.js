const NoteModel = require("../../db/models/note");

module.exports = {
  getAllNotes(req, res) {
    NoteModel.find()
      .then((doc) => {
        res.json(doc);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getNote(req, res) {
    const id = req.params.id;
    NoteModel.findOne({ _id: id })
      .then((doc) => {
        res.json(doc);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  saveNote(req, res) {
    const title = req.body.title;
    const body = req.body.body;
    const note = new NoteModel({
      title: title,
      body: body,
    });

    note
      .save()
      .then((doc) => {
        res.json(doc);
      })
      .catch((error) => {
        res.json({ message: error.message });
      });
  },

  updateNote(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const body = req.body.body;

    NoteModel.findOne({ _id: id })
      .then((doc) => {
        doc.title = title;
        doc.body = body;
        doc
          .save()
          .then((doc) => {
            res.json(doc);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  deleteNote(req, res) {
    const id = req.params.id;

    NoteModel.deleteOne({ _id: id })
      .then(() => {
        res.sendStatus(204);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
