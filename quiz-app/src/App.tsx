import { useState } from 'react'
import './style.css';
import './animations.js';
import QuestionCard from './components/QuestionCard';
import { questions } from './objects/gameQuestions';
import { answers } from './objects/gameAnswers';
import Title from './components/Title';


export function Layout() {

  const [toggleBtn, setToggle] = useState(false)
    
  return (
    <div className="Layout">

     <Title/>
  

    </div>
  )
}





/* props */
/* navigation with state */
/* conditional rendering / state */

/* create component */






/* export function Button() {
  
  const startGame = () => {

  }

  return (
    <div id="button" className='Button'>
      <button onClick={startGame}>Start</button>
    </div>
  )
} */

