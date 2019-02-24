const _ = require("lodash");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.status(400).send({
      title: `<h1>Survey Form</h1>`,
      body: "<p>Ready to get started? You just need to fill out the form</p>",
      button: "Submit"
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

    console.log("body contents", req.body);

    res.status(200).send({
      message: "The form was submitted successfully!",
      data: req.body
    });
    return;
  });
};
