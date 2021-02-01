const todoList = require("../data/todo-list");

const getTodoList = (ctx) => {
  ctx.body = todoList;
};

module.exports = {
  getTodoList,
};
