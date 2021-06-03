const express = require("express");
const PORT = 3000;
const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

// Access the parse results as request.body
app.post("/", function(req, res) {
  console.log(req.body.name);
  console.log(request.body.email);
  console.log(request.body.number);
  console.log(request.body.message);

});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})

//Serving Static files 
app.get("/", (req, res) => {
  const homePage = [
    { name: "Logo", image: "logo.png" },
    { name: "Minimalistic", image: "Minimalistic.jpg" },
    { name: "3D", image: "Interior.jpg" },
    { name: "Interior", image: "Interior.jpg" },
    { name: "Where to invest", image: "Where to invest.jpg" },
    { name: "New Schemes", image: "Schemes.jpg" },
    { name: "Luxury", image: "Luxury.jpg" },
  ];

  res.render("index", { homePage: images });
});

//Rendering Static Files using Express
app.use(express.static('images'))
app.use(express.static('styles'))
app.use(express.static('views'))

