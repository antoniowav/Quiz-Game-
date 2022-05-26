
import { buttonStyle, card } from '../styles'
import Start from '../assets/italian.jpeg'
import { display, styleImage } from "../styles"

interface Props {

    setToggle: any
}


export function Title(props: Props) {

    return (

        <div style={card} className="Container">
          <h1 className='Title'>Are you a real Italian?</h1>
          <img style={styleImage} src={Start} alt="" />
          <button style={buttonStyle} className='Button' onClick={() => props.setToggle(true)}>Play Now!</button>
        </div>
    )

  }
  
export default Title