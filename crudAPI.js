// crudAPI.js
const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

let items = [];

// Create
app.post("/items", (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).json({ message: "Item added", item });
});

// Read
app.get("/items", (req, res) => {
  res.json(items);
});

// Update
app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  items = items.map((item, index) => (index === id ? updatedItem : item));
  res.json({ message: "Item updated", updatedItem });
});

// Delete
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter((_, index) => index !== id);
  res.json({ message: "Item deleted" });
});

// Start server
app.listen(3000, () => {
  console.log("CRUD API running on http://localhost:3000");
});
