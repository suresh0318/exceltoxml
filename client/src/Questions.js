import React, { useState } from 'react';

const MyForm = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'Question 1',
      options: [
        { id: 1, text: 'Option 1', checked: false },
        { id: 2, text: 'Option 2', checked: false },
        { id: 3, text: 'Option 3', checked: false },
      ],
    },
    {
      id: 2,
      question: 'Question 2',
      options: [
        { id: 4, text: 'Option 4', checked: false },
        { id: 5, text: 'Option 5', checked: false },
        { id: 6, text: 'Option 6', checked: false },
      ],
    },
    // Add more questions with their respective options
  ]);

  const handleCheckboxChange = (questionId, optionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map((o) =>
                o.id === optionId ? { ...o, checked: !o.checked } : o
              ),
            }
          : q
      )
    );
  };

  const handleSaveButtonClick = () => {
    const selectedOptions = questions.reduce((selected, q) => {
      const selectedOptionsForQuestion = q.options.filter((o) => o.checked);
      if (selectedOptionsForQuestion.length > 0) {
        selected.push({
          question: q.question,
          options: selectedOptionsForQuestion.map((o) => o.text),
        });
      }
      return selected;
    }, []);

    console.log(selectedOptions);
    // Perform further actions with the selectedOptions data
  };

  return (
    <div>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.options.map((o) => (
            <label key={o.id}>
              <input
                type="checkbox"
                checked={o.checked}
                onChange={() => handleCheckboxChange(q.id, o.id)}
              />
              {o.text}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSaveButtonClick}>Save</button>
    </div>
  );
};

export default MyForm;
