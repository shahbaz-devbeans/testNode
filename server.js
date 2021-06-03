const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
