const koa = require("koa");
const parser = require("koa-bodyparser");

const app = new koa();

app.use(parser());

const PORT = 9000;
app.listen(PORT, () => console.log("Listening . . ."));
