const express = require("express");
const app = express();
const port = 5000;
const router = require("./src/routes/index");

app.use(express.json());

app.use("/api/v1", router);

//not found
app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
