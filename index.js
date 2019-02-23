const express = require("express");
const _ = require("lodash");
var bodyParser = require("body-parser");

const app = express();
const port = 3000;

// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/form", (req, res) => {
  if (_.isEmpty(req.body)) {
    res.status(400).send({
      message: "You've sent a request with an empty body!",
      data: req.body
    });
    return;
  }

  res.status(200).send({
    message: "The form was submitted successfully!",
    data: req.body
  });
  return;
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
