import React, { FC } from "react";
import { ButtonStuff, GameInterface } from "../interfaces/interfaces";

interface Props {
  test: GameInterface[];
  test2: ButtonStuff[];
}

export const QuestionCard: FC<Props> = (props) => {
    
  return (
    <div>
      <h1>Question {props.test[0].id}: {props.test[0].question} </h1>
      <button>{props.test2[0].text}</button>
      <button>{props.test2[1].text}</button>
    </div>
  );
};

export default QuestionCard;
