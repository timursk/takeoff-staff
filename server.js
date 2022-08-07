const jsonServer = require("json-server");
const fs = require("fs");

const initialData = `{
  "users": [{
    "id": 1,
    "email": "guest@mail.ru",
    "name": "guest",
    "password": "guest1234"
  }]
}`;

fs.writeFileSync("db.json", initialData);

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(5000, () => {
  console.log("JSON Server is running");
});
