// const path = require("path");
const router = require("express").Router();
// const {
// //     // getNotes,
//     saveNote
// //     // deleteNote
// } = require("../../public/assets/js/index");
// const { saveNote } = require("../../public/assets/js/index")
const noteData = require("../../db/db.json");
const uuid = require("../../helpers/uuid");
const { notes } = require('../../db/db.json');
const { createNewNote } = require('../../lib/notes');

// `POST /api/notes` should receive a new note to save on the request body, 
// add it to the `db.json` file, and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved 
// (look into `npm` packages that could do this for you).


router.get("/notes", (req, res) => {
    res.json(noteData);
});

router.post('/notes', (req, res) => {
    req.body.id = uuid();
    const { title, text } = req.body;
    if (title && text) {
        const newNotes = createNewNote(req.body, notes);
        res.json(newNotes);
        // const newNote = {
        //     title,
        //     text,
        //     note_id: uuid(),
        // };

        // const response = {
        //     status: "success",
        //     body: newNote,
        // };

        // res.json(response);
    } else {
        res.status(400).send('The note is not properly formatted');
    }
});

// router.post("/notes", (req, res) => {
    
// })

module.exports = router;
