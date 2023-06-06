import { useState } from "react";
const questions = [
    {
      text: "What is your favorite color?",
      options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      text: "What is your favorite animal?",
      options: ["Dog", "Cat", "Bird", "Fish"],
    },
    {
      text: "What is your favorite food?",
      options: ["Pizza", "Burgers", "Ice cream", "Chocolate"],
    },
  ];
const Bardans = () => {
    const [values, setValues] = useState({});
  console.log(values)
    const handleCheckboxChange = (event) => {
      const value = event.target.checked ? event.target.value : '';
      setValues({
        ...values,
        [event.target.name]: value,
      });
    };
  
    const handleCommentChange = (event) => {
      setValues({
        ...values,
        comment: event.target.value,
      });
    };
  
    return (
      <div>
        <h1>Questions</h1>
        {questions.map((question) => (
          <div key={question.id}>
            <h2>{question.text}</h2>
            {question.options.map((option) => (
                <>  <input
                type="checkbox"
                name={question.id}
                value={option.value}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={question.id}>{option.text}</label></>
            
            ))}
            <textarea
              name="comment"
              value={values.comment}
              onChange={handleCommentChange}
            />
          </div>
        ))}
      </div>
    );
  };
export default Bardans;
