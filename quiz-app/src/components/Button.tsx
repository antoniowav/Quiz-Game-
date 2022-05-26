import React, { CSSProperties, FC, MouseEventHandler, useState } from "react";
import { ButtonStuff, Question } from "../interfaces/interfaces";
import { buttonStyle, display, inputStyle } from "../styles";

interface Props {

  answer: ButtonStuff
  navigate: (path: number) => void
  
}

function renderTitle() {
  
  location.reload()

} 

export const Button: FC<Props> = (props: Props) => {
  
  
  if (props.answer.input) {
        
    return (

      <div style={display}>
        <div>
        <p >{props.answer.text}</p><button style={buttonStyle} onClick={() => renderTitle() } >Submit</button>
        </div>
      </div>

    ) 
  }

    return (

      <div style={display}>
          <button style={buttonStyle} onClick={() => props.navigate(props.answer.path)}> <p>{props.answer.text}</p> </button>
      </div>  
    )
}


export default Button

