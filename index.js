import server from "./api/server";

const port = process.env.PORT;

server.get("/", (req, res) => {
  res.send(`<h1>This server is up and running.</h1>`);
});

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
