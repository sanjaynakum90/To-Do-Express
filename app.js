import express from "express";
import HttpError from "./middleware/httpError.js";

const app = express();

app.use(express.json());


// Home Route

app.get("/", (req, res) => {

  res.status(200).json({ message: "Welcome to To-Do List API 🚀" });

});

let todoList = [
  {
    id: 1,
    title: "Morning Workout",
    description: "Do 20 minutes of cardio and stretching"
  },
  {
    id: 2,
    title: "Read a Book",
    description: "Read 30 pages of a self-improvement book"
  },
  {
    id: 3,
    title: "Practice Coding",
    description: "Solve 2 JavaScript problems on arrays"
  },
  {
    id: 4,
    title: "Grocery Shopping",
    description: "Buy vegetables, fruits, and milk"
  },
  {
    id: 5,
    title: "Clean Workspace",
    description: "Organize desk and remove unnecessary items"
  }
];

// Get All todos

app.get("/todos", (req, res) => {

  res.status(200).json({
    message: "To-do list retrieved successfully",
    todoList,
  });

});

// GET single todo by ID

app.get("/todos/:id", (req, res, next) => {

  const id = Number(req.params.id);

  const todo = todoList.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json("To-do item not found");
  }

  res.status(200).json(todo);

});




// undefined routes handling

app.use((req, res, next) => {

  next(new HttpError("Route not found", 404));

});

// centralize error handling

app.use((error,req,res,next) => {

    res.status(error.statuscode || 500).json({
        message:error.message || "Internal Server Error"
    });

});

// server

const port=5000;

app.listen(port, () => {
  console.log("server listening on port", port);
});

