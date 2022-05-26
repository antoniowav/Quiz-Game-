

export interface Question  {
    question: string,
    answeredQuestions?: number,
    img?: Image,
    answer: ButtonStuff[]
}

export interface ButtonStuff {
    input?: boolean,
    text: string, 
    path: number,
    id?: number
}

export interface Image {
    id: number,
    name: string,
    image: string
}


export default Question 
