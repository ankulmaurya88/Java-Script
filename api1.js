// api.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies

// Sample in-memory database (for demonstration)
let items = [
  { id: 1, name: "Item 1", description: "This is item 1" },
  { id: 2, name: "Item 2", description: "This is item 2" },
];

// **Routes**
// GET endpoint to return a welcome message
app.get("/", (req, res) => {
  res.send("Welcome to my expanded API!");
});

// GET endpoint to retrieve all items
app.get("/items", (req, res) => {
  res.json(items);
});

// GET endpoint to retrieve a single item by ID
app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send({ error: "Item not found" });
  }
});

// POST endpoint to create a new item
app.post("/items", (req, res) => {
  const { name, description } = req.body;
  const newItem = {
    id: items.length + 1,
    name,
    description,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT endpoint to update an item by ID
app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  const item = items.find((item) => item.id === id);

  if (item) {
    item.name = name;
    item.description = description;
    res.json(item);
  } else {
    res.status(404).send({ error: "Item not found" });
  }
});

// DELETE endpoint to delete an item by ID
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    res.status(204).send(); // No Content
  } else {
    res.status(404).send({ error: "Item not found" });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
