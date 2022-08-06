const jsonServer = require("json-server");
const fs = require("fs");

fs.writeFileSync(
  "db.json",
  `{
  "users": {
    "email": "guest@mail.ru",
    "password": "guest1234"
  }
}`
);

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(5000, () => {
  console.log("JSON Server is running");
});
