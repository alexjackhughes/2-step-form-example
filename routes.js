const _ = require("lodash");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.status(200).send({
      title: `Survey Form`,
      body: "Ready to get started? You just need to fill out the form",
      button: "Submit",
      form: {
        stepOne: {
          title: "Title",
          name: "Name",
          dob: "Date of Birth"
        },
        stepTwo: {
          location: "Current Location",
          date: "Current Date & Time",
          feedback: "User Feedback"
        }
      }
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
      message: "Awesome! The form was submitted successfully!",
      data: req.body
    });
    return;
  });
};
