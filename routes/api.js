const express = require("express");
const router = express.Router();
const noteActions = require("../actions/api/notesActions");

//Download all notes
router.get("/notes", noteActions.getAllNotes);

//Download single note
router.get("/notes/:id", noteActions.getNote);

//Save notes
router.post("/notes", noteActions.saveNote);

//Edit notes
router.put("/notes/:id", noteActions.updateNote);

//Delete notes
router.delete("/notes/:id", noteActions.deleteNote);

module.exports = router;
