import server from "./api/server";
import { sequelize } from "./models/index";

const port = process.env.PORT;

server.get("/", (req, res) => {
  res.send(`<h1>This server is up and running.</h1>`);
});

sequelize.sync().then(() => {
  server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
});
