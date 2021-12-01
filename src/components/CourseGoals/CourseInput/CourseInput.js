import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // If the entered value is 0 characters set the validation to falsey
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* If form control is invalid, inject the invalid className*/}
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        {/* If there is a falsey (aka zero input value the label is styled red, else black) */}
        <label>To do list</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
};

export default CourseInput;
