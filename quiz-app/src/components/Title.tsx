import { useState } from "react";
import { answers } from "../objects/gameAnswers";
import { questions } from "../objects/gameQuestions";
import QuestionCard from "./QuestionCard";


export const Title = () => {

    const [toggleBtn, setToggle] = useState(false)
    
    return (
      <div>
        <h1 className='Title' >Are you a real Italian?</h1>
        <button className='Button' onClick={() => setToggle(!toggleBtn)}>Play Now!</button>
        {toggleBtn && <QuestionCard test={questions} test2={answers} />}

      </div>
    );
  };
  
  export default Title