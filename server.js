const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes)


// Catch all route for errors
app.use((req, re) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});