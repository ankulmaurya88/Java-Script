// api.js
const express = require("express");
const app = express();

// GET endpoint
app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

// Start the server
app.listen(3000, () => {
  console.log("API is running on http://localhost:3000");
});
