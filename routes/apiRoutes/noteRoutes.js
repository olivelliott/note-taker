// const path = require("path");
const router = require("express").Router();
const uuid = require("../../helpers/uuid");
const { notes } = require('../../db/db.json');
const { createNewNote } = require('../../lib/notes');


router.get("/notes", (req, res) => {res.json(notes)});

router.post('/notes', (req, res) => {
    // Create a unique id with the helper function
    req.body.id = uuid();
    const newNotes = createNewNote(req.body, notes);
    res.json(newNotes);
});


module.exports = router;
