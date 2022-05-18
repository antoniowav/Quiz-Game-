import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './App'
import { QuestionCard } from './components/QuestionCard'
import { answers } from './objects/gameAnswers'
import { questions } from './objects/gameQuestions'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Layout/>


  </React.StrictMode>
)

