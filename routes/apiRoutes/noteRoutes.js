const path = require("path");
const router = require("express").Router();
const { notes } = require("../../db/db.json");
// const notesHtml = require('../../public/index.html');

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;
