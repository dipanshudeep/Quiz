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
  }, [finalData]);

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
    <div className="h-screen bg-gray-800 text-white p-8 bg-gradient-to-br from-[#172A45] to-[#0A192F]">
      <div className="bg-gray-800 h-5/6 p-6 text-2xl rounded-xl border border-cyan-500 shadow-md text-white text-center">
        
        {/* Display Current Question */}
        <div className="bg-gray-800 p-6 mb-10 rounded-xl border border-cyan-500 shadow-md text-white text-center">
          {currentQuestion?.question}
        </div>

        {/* Display Answer Options */}
        {currentQuestion?.options.map((option, idx) => (
          <div
            key={idx}
            className={`p-5 mb-5 text-2xl rounded-xl border border-cyan-500 shadow-md text-white text-center cursor-pointer hover:shadow-blue-500 transition-all duration-300 
              ${selectedAnswers[questionIndex] === option ? "bg-blue-500" : "bg-gray-800"}`}
            onClick={() => getAnswer(option)}
          >
            {option}
          </div>
        ))}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prev}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-300"
            disabled={questionIndex === 0}
          >
            Prev
          </button>

          {questionIndex === finalData.length - 1 ? (
            <button
              onClick={submitQuiz}
              className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-all duration-300"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={next}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-300"
            >
              Next
            </button>
          )}
        </div>

        {/* Display Score After Submission */}
        {score !== null && (
          <div className="text-4xl font-bold text-green-400 mt-6">
            🎉 Your Score: {score} / {finalData.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
