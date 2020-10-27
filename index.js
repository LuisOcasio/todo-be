import server from "./api/server";
import models, { sequelize } from "./models";

const port = process.env.PORT;

server.get("/", (req, res) => {
  res.send(`<h1>This server is up and running.</h1>`);
});

sequelize.sync({ force: true }).then(async () => {
  server.listen(port, () => console.log(models));
});
