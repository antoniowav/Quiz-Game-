import { FC, useState } from 'react'
import './style.css';
import './animations.js';
import QuestionCard from './components/QuestionCard';
import { questions } from './objects/gameQuestions';
import Title from './components/Title';
import { ButtonStuff, Question } from './interfaces/interfaces';



interface Props {
  question: any;
  answer: Question [] | any;
}

export const Layout: FC<Props> = (props:Props) => {

  const [gameStarted, setgameStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(questions[0])



  function navigateToNext(path: number): void {
    console.log("Test" + path);
    console.log(questions);
    setCurrentQuestion(questions[path])
  }


  return (  
    <div className="Layout">
        {gameStarted ? 
        <QuestionCard question={currentQuestion} image={currentQuestion} answer={currentQuestion} navigate={navigateToNext}/> 
        : 
        <Title setToggle={setgameStarted} />
        } 
    </div>
  )
}

