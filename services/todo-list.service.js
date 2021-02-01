let todoList = require("../data/todo-list");

const getTodoList = (ctx) => {
  ctx.body = todoList;
};

const addTodo = (ctx) => {
  const newTodo = {
    id: generateTodoIncId(),
    name: ctx.request.body.name,
    done: false,
  };
  todoList.push(newTodo);
  ctx.body = todoList;
};

const markTodoAsCompleted = (ctx) => {
  const todoId = ctx.params.id;
  let isTodoFound;

  todoList.map((todoItem) => {
    if (todoItem.id === +todoId) {
      isTodoFound = true;
      todoItem.done = true;
      return;
    }
  });

  if (!isTodoFound) ctx.throw(404, "No todo found");
  else ctx.body = todoList;
};

const deleteTodo = (ctx) => {
  const todoId = +ctx.params.id;
  todoList = todoList.filter((todoItem) => todoItem.id !== todoId);
  ctx.body = todoList;
};

generateTodoIncId = () => {
  let lastTodoId = todoList[todoList.length - 1].id;
  return ++lastTodoId;
};

module.exports = {
  getTodoList,
  addTodo,
  markTodoAsCompleted,
  deleteTodo,
};
