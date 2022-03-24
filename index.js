const express = require("express");
const format = require("date-format");

const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello from Arbaz</h1>");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    userName: "ab.diwan",
    followers: 66,
    follows: 70,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const instaSocial = {
    userName: "ab.diwan",
    followers: 88,
    follows: 14,
    date: format.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const instaSocial = {
    userName: "arbaz-diwan",
    followers: 2800,
    follows: 7000,
    date: format.asString("dd-MM-yyyy - hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/:value", (req, res) => {
  res.status(200).send({ param: req.params.value });
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
