import React, { useContext, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../Context/DataContext";

function QuizPage() {
  const { finalData } = useContext(DataContext);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(finalData.length).fill(null));
  const [score, setScore] = useState(null);

  if (!finalData || finalData.length === 0) {
    return (
      <div className="h-screen bg-gray-800 text-white p-8 bg-gradient-to-br from-[#172A45] to-[#0A192F]">
        <h1 className="font-bold text-6xl ">
          Loading ..... <br />
          <span className="text-4xl text-orange-300">
            Maybe you didn't select a topic. Please click below to select a topic.
          </span>
        </h1>
        <Link to="/quizList">
          <button className="bg-amber-800 px-3.5 mt-7 cursor-pointer py-3 text-white rounded-2xl ml-5">
            Click here
          </button>
        </Link>
      </div>
    );
  }

  const currentQuestion = finalData[questionIndex];
    let num = questionIndex+1
    let options = ['(a)','(b)','(c)','(d)']
  /**
   * Handles answer selection and updates state.
   */
  const getAnswer = (option) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = option;
    setSelectedAnswers(updatedAnswers);
  };

 
 
 
  /**
   * Moves to the previous question (if not at the first question).
   */
  const prev = useCallback(() => {
    setQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));

  }, []);

  /**
   * Moves to the next question (if not at the last question).
   */
  const next = useCallback(() => {
    setQuestionIndex((prevIndex) => Math.min(prevIndex + 1, finalData.length - 1));
    num--
  }, [finalData]);
  console.log(num);
  

  /**
   * Calculates the score by comparing selected answers with correct answers.
   */
  const submitQuiz = () => {
    let correctCount = 0;
    finalData.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-2 md:p-8 bg-gradient-to-br from-[#172A45] to-[#0A192F] flex items-center justify-center">
      <div className="bg-gray-800 w-full max-w-2xl h-auto md:h-5/6 p-2 md:p-6 text-lg md:text-2xl rounded-xl border border-cyan-500 shadow-md text-white text-center">
        
        {/* Display Current Question */}
        <div className="bg-gray-800 flex flex-col md:flex-row p-4 md:p-6 mb-6 md:mb-10 rounded-xl border border-cyan-500 shadow-md text-white text-center">
        <div className="px-4 md:px-11">{'Q'+num}</div><div>{currentQuestion?.question}</div>
          
        </div>

        {/* Display Answer Options */}
        {currentQuestion?.options.map((option, idx) => (
          <div
            key={idx}
            className={`p-3 md:p-5 mb-3 md:mb-5 text-lg md:text-2xl flex rounded-xl border border-cyan-500 shadow-md text-white text-center cursor-pointer hover:shadow-blue-500 transition-all duration-300 
              ${selectedAnswers[questionIndex] === option ? "bg-blue-500" : "bg-gray-800"}`}
            onClick={() => getAnswer(option)}
          >
           <div className="px-4 md:px-12">{options[idx]}</div> <div>{option}</div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row justify-between mt-4 gap-2">
          <button
            onClick={prev}
            className="mt-2 md:mt-4 px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-300"
            disabled={questionIndex === 0}
          >
            Prev
          </button>

          {questionIndex === finalData.length - 1 ? (
            <button
              onClick={submitQuiz}
              className="mt-2 md:mt-4 px-4 md:px-6 py-2 md:py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-all duration-300"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={next}
              className="mt-2 md:mt-4 px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-300"
            >
              Next
            </button>
          )}
        </div>

        {/* Display Score After Submission */}
        {score !== null && (
          <div className="text-2xl md:text-4xl font-bold text-green-400 mt-6">
            🎉 Your Score: {score} / {finalData.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPage;