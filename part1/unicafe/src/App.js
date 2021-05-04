import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const average = (good - bad) / (good + bad + neutral)
  const positive = good / (good + bad + neutral) * 100

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick = {()=>setGood(good+1)} text='good'/>
        <Button handleClick = {()=>setNeutral(neutral+1)} text='neutral'/>
        <Button handleClick = {()=>setBad(bad+1)} text='bad'/>
      </div>
      <div>
        <h1>statistics</h1>
        <p>
          good {good}<br/>
          neutral {neutral}<br/>
          bad {bad} <br/>
          total {good + neutral + bad} <br/>
          average {average} <br/>
          positive {positive} %
        </p>
      </div>
    </div>
  )
}

export default App