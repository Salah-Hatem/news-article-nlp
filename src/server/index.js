const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("dist"));

console.log(__dirname);

// API
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = process.env.API_KEY;

console.log(`API Key: ${process.env.API_KEY}`);
let userInput = [];

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// POST Route
app.post("/home", async (req, res) => {
  userInput = req.body.url;
  console.log(`You entered: ${userInput}`);

  const response = await fetch(
    `${baseURL}key=${apiKey}&url=${userInput}&lang=en`
  );
  try {
    const data = await response.json();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log("error", error);
  }
});

app.listen(8081, function () {
  console.log("Server is listening on port 8081!");
});
