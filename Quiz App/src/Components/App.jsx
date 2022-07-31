import './App.css'
import Question from './App-Components/Question'
import OptionA from './App-Components/OptionA'
import OptionB from './App-Components/OptionB'
import OptionC from './App-Components/OptionC'
import OptionD from './App-Components/OptionD'
import quizList from "./quiz.js";

function App() {
  // Currently only working for 1 object item will figure ou for more in future
  const quizQuestion = quizList.map(item => <Question key={item.id} quiz={item}/>)
  const quizOptionA = quizList.map(item => <OptionA key={item.id} quiz={item}/>)
  const quizOptionB = quizList.map(item => <OptionB key={item.id} quiz={item}/>)
  const quizOptionC = quizList.map(item => <OptionC key={item.id} quiz={item}/>)
  const quizOptionD = quizList.map(item => <OptionD key={item.id} quiz={item}/>)
  return (
    <div className="container">
      {quizQuestion}
      {quizOptionA}
      {quizOptionB}
      {quizOptionC}
      {quizOptionD}
    </div>
  )
}

export default App
