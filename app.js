const express = require("express");
const app = express();
var path = require("path");
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.post("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/experiencia", (req, res) => {
  res.sendFile(path.join(__dirname + "/experience.html"));
});
app.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname + "/contacto.html"));
});
app.get("/guess-the-number", (req, res) => {
  res.sendFile(path.join(__dirname + "/guess-the-number.html"));
});
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
