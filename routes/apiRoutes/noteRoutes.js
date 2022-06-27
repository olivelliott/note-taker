// const path = require("path");
const router = require("express").Router();
const { filterByQuery } = require("../../lib/notes");
const notes = require("../../db/db");
// // const notesHtml = require('../../public/index.html');

// // `POST /api/notes` should receive a new note to save on the request body, 
// // add it to the `db.json` file, and then return the new note to the client. 
// // You'll need to find a way to give each note a unique id when it's saved 
// // (look into `npm` packages that could do this for you).


router.get("/notes", (req, res) => {
    // let notesData = notes;
    // if (req.query) {
    //     notesData = filterByQuery(req.query, notesData);
    // }
    res.json(notes);
    // res.send('hello')
});

// // router.post('/notes', (req, res) => {

// // })

module.exports = router;
