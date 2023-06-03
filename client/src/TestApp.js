import { useState } from "react";

const TestApp = () => {
    const questions = [
      {
        text: "What is your name?",
        options: [
          { text: "John Doe" },
          { text: "Jane Doe" },
        ],
      },
      {
        text: "What is your favorite color?",
        options: [
          { text: "Red" },
          { text: "Green" },
          { text: "Blue" },
        ],
      },
    ];
    const [selectedQuestions, setSelectedQuestions] = useState([]);
  
    const handleQuestionChange = (event) => {
      const questionId = event.target.value;
      if (selectedQuestions.includes(questionId)) {
        setSelectedQuestions((prevSelectedQuestions) =>
          prevSelectedQuestions.filter((question) => question !== questionId)
        );
      } else {
        setSelectedQuestions((prevSelectedQuestions) =>
          prevSelectedQuestions.concat([questionId])
        );
      }
    };
  
    const handleSave = () => {
      const questions = [];
      const checkedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");
      checkedCheckboxes.forEach((checkbox) => {
        questions.push({
          question: checkbox.name,
          answer: checkbox.checked,
        });
      });
      console.log(questions)
    };
  
    return (
      <div>
        <h1>Test App</h1>
        <ul>
          {questions.map((question) => (
            <li key={question.text}>
              <h2>{question.text}</h2>
              {question.options.map((option) => (
                <>
                 <input
                type="checkbox"
                  id={option.text}
                  value={option.text}
                  onChange={handleQuestionChange}
                  key={option.text}
                />
                <label htmlFor={option.text}>{option.text}</label>
                </>
               
              ))}
            </li>
          ))}
        </ul>
        <button onClick={handleSave}>Save</button>
      </div>
    );
  };
  
  export default TestApp;
  