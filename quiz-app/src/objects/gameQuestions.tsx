
import { Question } from "../interfaces/interfaces";

import Pisa from '../assets/torredipisa.jpeg'
import Pizza from '../assets/pizza.jpeg'
import Dante from '../assets/dante.jpeg'
import Florence from '../assets/florence.jpeg'
import Eurovision from '../assets/eurovision.jpeg'
import Winners from '../assets/winners.jpeg'
import Littlebit from '../assets/littlebit.jpeg'
import Coffee from '../assets/coffee.webp'
import Mario from '../assets/mario.png'
import Real from '../assets/real.jpeg'


export const questions: Question[] = [
   
    {
        question: 'How is this building called?', 
        answeredQuestions: 2,
        img: 
            {
            id: 3,
            name: 'Torre di Pisa',
            image: Pisa
            },
        answer: [
            {
                text: 'Colosseo', 
                path: 12,
                id: 3
            },
            {
                text: 'Duomo', 
                path: 12,
                id: 4
            },
            {
                text: 'Torre di Pisa', 
                path: 1,
                id: 5
            },
            {
                text: 'Vesuvio', 
                path: 12,
                id: 6
                
            }
        ]
    },
    {
        question: 'Do you like pinapple on pizza?',
        answeredQuestions: 3,
        img: 
            {
            id: 3,
            name: 'Pizza',
            image: Pizza
            },
        answer: [
            {
                text: 'Yes', 
                path: 2,
                id: 7
            },
            {
                text: 'No', 
                path: 4,
                id: 8
            }

        ]

    },
    {
        question: 'Are you sure?',
        answeredQuestions: 4,
        answer: [
            {
                text: 'Yes', 
                path: 3,
                id: 9
            },
            {
                text: 'No', 
                path: 4,
                id: 10
            }
        ]

    },
    {
        question: 'No but for real?',
        answeredQuestions: 5,
        answer: [
            {
                text: 'Yes', 
                path: 12,
                id: 11
            },
            {
                text: 'No', 
                path: 4,
                id: 12
            }
        ]
    },
    {
        question: 'What is the name of this character?',
        answeredQuestions: 6,
        img: 
            {
            id: 6,
            name: 'Dante',
            image: Dante
            },
        answer: [
            {
                text: 'Dante Alighieri', 
                path: 5,
                id: 13
            },
            {
                text: 'Pante Balleri', 
                path: 8,
                id: 14
            },
            {
                text: 'Paolo Rossi', 
                path: 8,
                id: 15
            },
            {
                text: 'Galileo Galilei', 
                path: 8,
                id: 16
            }
        ]

    },
    {
        question: 'What is the name of this city?',
        answeredQuestions: 7,
        img: 
            {
            id: 7,
            name: 'Florence',
            image: Florence
            },
        answer: [
            {
                text: 'Milano', 
                path: 8,
                id: 17
            },
            {
                text: 'Roma', 
                path: 8,
                id: 18
            },
            {
                text: 'Firenze', 
                path: 6,
                id: 19
            },
            {
                text: 'Torino', 
                path: 8,
                id: 20
            }
        ]

    },
    {
        question: 'In which city in Italy was the latest Eurovision?',
        answeredQuestions: 8,
        img: 
            {
            id: 8,
            name: 'Eurovision',
            image: Eurovision
            },
        answer: [
            {
                text: 'Milano', 
                path: 9,
                id: 21
            },
            {
                text: 'Roma', 
                path: 9,
                id: 22
            },
            {
                text: 'Firenze', 
                path: 9,
                id: 23
            },
            {
                text: 'Torino', 
                path: 7,
                id: 24
            }
        ]
    },
    {
        question: 'What did italy win in 2021?',
        answeredQuestions: 9,
        img: 
            {
            id: 9,
            name: 'Winners',
            image: Winners
            },
        answer: [
            {
                text: 'Eurocup', 
                path: 11,
                id: 25
            },
            {
                text: 'Eurovision', 
                path: 11,
                id: 26
            },
            {
                text: 'Curling', 
                path: 10,
                id: 27
            },
            {
                text: 'Nothing', 
                path: 10,
                id: 28
            }
        ]

    },
    {
        question: 'You are a little bit Italian',
        answeredQuestions: 10,
        img: 
            {
            id: 10,
            name: 'Little',
            image: Littlebit
            },
        answer: [
            {
                text: 'End game', 
                path: 13,
                id: 32
            }
        ]

    },
    {
        question: 'You are more italian than Swedish espresso',
        answeredQuestions: 11,
        img: 
            {
            id: 11,
            name: 'Espresso',
            image: Coffee
            },
        answer: [
            {
                text: 'End game', 
                path: 13,
                id: 32
            }
        ]
    },
    {
        question: 'You are more italian than Super Mario',
        answeredQuestions: 12,
        img: 
            {
            id: 12,
            name: 'Mario',
            image: Mario
            },
        answer: [
            {
                text: 'End game', 
                path: 13,
                id: 32
            }
        ]
    },
    {
        question: 'You are a real Italian',
        answeredQuestions: 13,
        img: 
            {
            id: 13,
            name: 'Real',
            image: Real
            },
        answer: [
            {
                text: 'End game', 
                path: 13,
                id: 32
            }
        ]
    },
    {
        question: 'I am sorry but you cannot be considered Italian. Mamma mia :(',
        answeredQuestions: 14,
        answer: [
            {
                text: 'End game', 
                path: 13,
                id: 32
            }
        ]
    },
    {
        question: 'Thanks for playing this quiz, your data will be sold to Meta now and they will probably use it to alterate an election result :)',
        answeredQuestions: 15,
        answer: [
            {
                text: 'Too late now :)', 
                path: 0,
                id: 33,
                input: true
            }
        ]
    }

]