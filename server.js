const express = require("express");
const path = require("path");

const PORT = 3000;
const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

app.use(express.static(path.join(__dirname, "client")));

// Access the parse results as request.body
app.post("/api/contactus", (req, res) => {
  console.log(req.body);

  res.status(201);
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
