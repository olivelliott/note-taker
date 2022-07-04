// const path = require("path");
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uuid = require("../../helpers/uuid");
const notes = require('../../db/db.json');

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'))
});

router.post('/notes', (req, res) => {
    //  Create a new note object
    const { title, text, id } = req.body;

    if ( title || text ) {
        const newNote = {
            title,
            text,
            id: uuid()
        };
        //  Convert the object to a string to save it
        const noteString = JSON.stringify(newNote);

        // Retrieve existing reviews
        fs.readFile(path.join(__dirname, "../../db/db.json"), 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const parsedNotes = JSON.parse(data);

                // Add new note
                parsedNotes.push(newNote);

                // Write updated notes back to the database
                fs.writeFile(
                    path.join(__dirname, "../../db/db.json"),
                    JSON.stringify(parsedNotes, null, 2),

                    (err) =>
                    err
                        ? console.log(err)
                        : console.log(`New note has been written to the JSON database`)
                );
            }
        });

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in creating new note');
    }
});

router.delete('/notes/:id', (req, res) => {
    const params = [req.params.id];
    if (params) {
        fs.readFile(path.join(__dirname, "../../db/db.json"), 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                // Filter through the notes array and remove the chosen id from the object
                let filteredNotes = notes.filter((note) => note.id !== req.params.id);

                // Write filtered notes back to the database
                fs.writeFile(
                    path.join(__dirname, "../../db/db.json"),
                    JSON.stringify(filteredNotes, null, 2),

                    (err) =>
                    err
                        ? console.log(err)
                        : console.log(`Note has been deleted from the JSON database`)
                );

                const response = {
                    status: "success",
                    body: filteredNotes,
                };

                res.json(response);
            }
        });
    } else {
        res.json("Error in deleting note");
    }
});

module.exports = router;
