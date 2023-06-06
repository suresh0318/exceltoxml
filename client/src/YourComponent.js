import React, { useState } from 'react';

function YourComponent() {
  const [formValues, setFormValues] = useState({});
console.log(formValues)
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: {
        ...prevValues[name],
        [event.target.value]: checked,
      },
    }));
  };

  const handleCommentChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Questions</h2>
      <label>
        Question 1:
        <input
          type="checkbox"
          name="question1"
          value="option1"
          onChange={handleCheckboxChange}
        />
        Option 1
        <input
          type="checkbox"
          name="question1"
          value="option2"
          onChange={handleCheckboxChange}
        />
        Option 2
        <input
          type="text"
          name="comment1"
          onChange={handleCommentChange}
        />
      </label>

      <label>
        Question 2:
        <input
          type="checkbox"
          name="question2"
          value="option1"
          onChange={handleCheckboxChange}
        />
        Option 1
        <input
          type="checkbox"
          name="question2"
          value="option2"
          onChange={handleCheckboxChange}
        />
        Option 2
        <input
          type="text"
          name="comment2"
          onChange={handleCommentChange}
        />
      </label>

    </div>
  );
}
export default YourComponent;