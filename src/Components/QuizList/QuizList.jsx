import React, { useContext, useState } from 'react';
import DataContext from '../../Context/DataContext';
import {Link} from 'react-router-dom'


function QuizList() {
  // const [getTopic, setTopic] = useState(); 
  const {setGetTopic} = useContext(DataContext)

  const handleClick = (e) => {

    setGetTopic(e.target.innerText);
      // console.log(e.target.innerText);
      
    
  };

  return (
    <>

      <div className='h-screen bg-gray-800 text-white p-4 md:p-8 scroll-m-1 bg-gradient-to-br from-[#172A45] to-[#0A192F]'>
        <div className='bg-gray-80 text-black font-bold gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 text-base md:text-xl'>
          {["HTML", "CSS", "JavaScript", "React", "Mongo DB", "Node Js", "Next Js", "PHP", "Python", "SQL", "Django"].map((topic, index) => (
             <Link to="/QuizPage" key={index}>
             <div
               className="bg-gray-800 p-4 md:p-6 rounded-xl border border-cyan-500 shadow-md text-white text-center cursor-pointer hover:shadow-blue-500 transition-all duration-300"
               onClick={(e) => handleClick(e)} 
             >
               {topic}
             </div>
           </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default QuizList;
