import { useState } from 'react'

const Feedback = () => {
  return (
    <div> 
      <h1>Give feedback</h1>
    </div>
  )
} 

const Button1 = ({handleGoodClick, text }) => {
  return (  
  <button onClick={handleGoodClick}>
    {text}
  </button> 
)
}

const Button2 = ({handleNeutralClick, text }) => {
  return (  
  <button onClick={handleNeutralClick}>
    {text}
  </button> 
)
}

const Button3 = ({handleBadClick, text }) => {
  return (  
  <button onClick={handleBadClick}>
    {text}
  </button> 
)
}

const Statistics = (props) => {
  console.log(props)
  if (props.good+props.bad+props.neutral === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>the app is used by pressing the buttons</p>
      </div>
    )
  }
  return(
    <div>
        <h1>Statistics</h1>
          <table>
            <tbody>
              <tr>
              <th>Grade</th>
              <th>Value</th>
              </tr>
              <StatisticLine text='Good' value={props.good} />
              <StatisticLine text='Neutral' value={props.neutral} />
              <StatisticLine text='Bad' value={props.bad} />
              <StatisticLine text='All' value={props.bad+props.neutral+props.good} />
              <StatisticLine text='Avg' value={(props.good-props.bad)/(props.good+props.bad+props.neutral)} />
              <StatisticLine text='Positive' value={((props.good)/(props.good+props.bad+props.neutral))*100}  />
            </tbody>
          </table>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)  

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }  
  const handleBadClick = () => {
    setBad(bad + 1)
  }  

  return (
    <div>
      <Feedback />
      <Button1 handleGoodClick={handleGoodClick} text='Good' />
      <Button2 handleNeutralClick={handleNeutralClick} text='Neutral' />
      <Button3 handleBadClick={handleBadClick} text='Bad' />       
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App