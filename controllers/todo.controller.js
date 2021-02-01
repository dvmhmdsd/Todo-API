const router = require("koa-router");
const {
  getTodoList,
  addTodo,
  markTodoAsCompleted,
  deleteTodo,
} = require("../services/todo-list.service");

const app = new router({
  prefix: "/todo",
});

app.get("/list", getTodoList);
app.post("/add", addTodo);
app.put("/:id", markTodoAsCompleted);
app.delete("/:id", deleteTodo);

module.exports = app;
