const koa = require("koa");
const parser = require("koa-bodyparser");
const todoController = require("./controllers/todo.controller");

const app = new koa();

app.use(parser());
app.use(todoController.routes());

const PORT = 9000;
app.listen(PORT, () => console.log("Listening . . ."));
