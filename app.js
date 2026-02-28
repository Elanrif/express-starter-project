const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory data store
let items = [
  {
    id: 1,
    name: "Item 1",
    description: "Description 1",
    price: 10.99,
    category: "Category A",
  },
  {
    id: 2,
    name: "Item 2",
    description: "Description 2",
    price: 15.49,
    category: "Category B",
  },
  {
    id: 3,
    name: "Item 3",
    description: "Description 3",
    price: 20.0,
    category: "Category C",
  },
  {
    id: 4,
    name: "Item 4",
    description: "Description 4",
    price: 25.5,
    category: "Category D",
  },
  {
    id: 5,
    name: "Item 5",
    description: "Description 5",
    price: 30.75,
    category: "Category E",
  },
];

// CRUD Routes

// Get all items
app.get("/items", (req, res) => {
  res.json(items);
});

// Get a single item by ID
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(item);
});

// Create a new item
app.post("/items", (req, res) => {
  const { name, description, price, category } = req.body;
  if (!name || !description || !price || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newItem = {
    id: items.length + 1,
    name: name,
    description: description,
    price: price,
    category: category,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update an item by ID
app.put("/items/:id", (req, res) => {
  const { name, description, price, category } = req.body;
  if (!name || !description || !price || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  item.name = name;
  item.description = description;
  item.price = price;
  item.category = category;
  res.json(item);
});

// Delete an item by ID
app.delete("/items/:id", (req, res) => {
  const itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item not found" });
  }
  items.splice(itemIndex, 1);
  res.status(204).send();
});

// Export the app instance
module.exports = app;
