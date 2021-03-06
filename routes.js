const _ = require("lodash");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.status(200).send({
      title: `SURVEY FORM`,
      body: "Ready to get started? You just need to fill out the form"
    });
  });

  app.post("/form", (req, res) => {
    if (_.isEmpty(req.body)) {
      res.status(400).send({
        message: "You've sent a request with an empty body!",
        data: req.body
      });
      return;
    }

    console.log("The form was successfully submitted! ", req.body);

    res.status(200).send({
      message: "Awesome! The form was submitted successfully!",
      data: req.body
    });
    return;
  });
};
