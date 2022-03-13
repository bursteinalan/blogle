const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8000";
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+"/index.html"), { title: "Home" });
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});