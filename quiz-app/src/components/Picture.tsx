import React, { CSSProperties, FC } from "react";
import { Question } from "../interfaces/interfaces";
import { questions } from "../objects/gameQuestions";
import { styleImage } from "../styles";

interface Props {
  image: any;
}

export const Picture: FC<Props> = (props: Props) => {
    
  return (

    <div>
         <img style={styleImage} src={props.image} />
    </div>  

  );
}

export default Picture

