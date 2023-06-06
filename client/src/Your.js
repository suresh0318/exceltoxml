import React, { useState } from "react";

const Your = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Question 1",
      checkboxes: [
        { id: 11, label: "Option 1", checked: false },
        { id: 12, label: "Option 2", checked: false },
        { id: 13, label: "Option 3", checked: false },
      ],
      comment: "",
    },
    {
      id: 2,
      question: "Question 2",
      checkboxes: [
        { id: 21, label: "Option 1", checked: false },
        { id: 22, label: "Option 2", checked: false },
        { id: 23, label: "Option 3", checked: false },
      ],
      comment: "",
    },
  ]);

  const handleCheckboxChange = (questionId, checkboxId) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            checkboxes: question.checkboxes.map((checkbox) => {
              if (checkbox.id === checkboxId) {
                return { ...checkbox, checked: !checkbox.checked };
              }
              return checkbox;
            }),
          };
        }
        return question;
      });
    });
  };

  const handleCommentChange = (questionId, value) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === questionId) {
          return { ...question, comment: value };
        }
        return question;
      });
    });
  };
  const handleFormSubmit = () => {
    questions.forEach((question) => {
      console.log(question.question);
      question.checkboxes.forEach((checkbox) => {
        console.log(checkbox.label, checkbox.checked);
      });
      console.log(question.comment);
    });
  };
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.question}</p>
          {question.checkboxes.map((checkbox) => (
            <label key={checkbox.id}>
              <input
                type="checkbox"
                checked={checkbox.checked}
                onChange={() => handleCheckboxChange(question.id, checkbox.id)}
              />
              {checkbox.label}
            </label>
          ))}
          <input
            type="text"
            value={question.comment}
            onChange={(e) => handleCommentChange(question.id, e.target.value)}
          />
        </div>
      ))}

      <button onClick={handleFormSubmit}>Submit</button>
    </div>
  );
};

export default Your;
