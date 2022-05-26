import React, { CSSProperties, FC } from "react";
import {  ButtonStuff, Question } from "../interfaces/interfaces";
import Button from "./Button";
import Picture from "./Picture";
import { display } from '../styles'

interface Props {

  question: Question;
  answer:  Question;
  image: Question;
  navigate: (path: number) => void

}

export const QuestionCard: FC<Props> = (props) => {

    const { question } = props.question
    const { img }  = props.image
    const { answer } = props.answer

  return (

    <div>

      <h1> {question} </h1>
        {
        img ? (
            <Picture image={img.image} />
        ): undefined
        }        
         <div style={display}>
         {
         answer.map((answer: ButtonStuff) => 
        
         <Button key={answer.id} 
          navigate={props.navigate}
          answer={answer}
          /> 
            
        )}

        </div>

    </div>
  );
}

export default QuestionCard;


