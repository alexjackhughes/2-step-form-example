import React from "react";

const StepTwo = ({ formOne, formTwo, showNextForm, submit }) => {
  console.log("form one", formOne);
  return (
    <div>
      <h1>Step Two</h1>
      {
        // Current location - some seperate component https://gist.github.com/danrovito/977bcb97c9c2dfd3398a
        // Current date / time https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local
        // User feedback - text field <textarea name="message" rows="10" cols="30">
      }
      <button onClick={() => showNextForm(false)}>Go Back</button>
    </div>
  );
};

export default StepTwo;
