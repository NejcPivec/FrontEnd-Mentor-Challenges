const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// @todo - Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description, checked } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description, checked) VALUES($1, $2) RETURNING *",
      [description, checked]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// @todo - Get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err);
  }
});

// @todo - Get single todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleTodo = await pool.query(
      "SELECT * FROM todo WHERE todo_id = $1",
      [id]
    );
    res.json(singleTodo.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// @todo - Update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { checked } = req.body;
    console.log(checked);
    await pool.query("UPDATE todo SET checked = $1 WHERE todo_id = $2", [
      checked,
      id,
    ]);
    res.json("Todo was updated");
  } catch (err) {
    console.error(err);
  }
});

// @todo - Delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("Todo was deleted");
  } catch (err) {
    console.error(err);
  }
});

// Create server
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
