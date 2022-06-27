const express = require('express');
const path = require("path");
const nodemon = require('nodemon');

const PORT = process.env.PORT || 3001;
const app = express();

const { notes } = require("./db/db");

const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});