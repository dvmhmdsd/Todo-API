const router = require("koa-router");
const { getTodoList } = require("../services/todo-list.service");

const app = new router({
  prefix: "/todo",
});

app.get("/list", getTodoList);

module.exports = app;
