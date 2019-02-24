const express = require("express");
var bodyParser = require("body-parser");

const app = express();
const port = 3003;

// Configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// Add the routes file
require("./routes")(app);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
