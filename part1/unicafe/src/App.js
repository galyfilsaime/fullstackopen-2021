import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => {
  return (
  <p>{text} {value}</p>
  )
}

const Statistics = ({good, neutral, bad, average, positive}) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <p>no feedback provided</p>
      </div>
    )
  }
  return (
  <div>
    <table>
      <tbody>
        <tr>
          <td><Statistic text='good' /></td>
          <td><Statistic value={good} /></td>
        </tr>
        <tr>
          <td><Statistic text='neutral' /></td>
          <td><Statistic value={neutral} /></td>
        </tr>
        <tr>
          <td><Statistic text='bad' /></td>
          <td><Statistic value={bad} /></td>
        </tr>
        <tr>
          <td><Statistic text='total' /></td>
          <td><Statistic value={good + neutral + bad} /></td>
        </tr>
        <tr>
          <td><Statistic text='average' /></td>
          <td><Statistic value={average} /></td>
        </tr>
        <tr>
          <td><Statistic text='positive' /></td>
          <td><Statistic value={positive}/></td>
          <td>%</td>
        </tr>
      </tbody>
    </table>
  </div> )
}

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
      <h1>statistics</h1>
      <Statistics
        good = {good}
        neutral = {neutral}
        bad = {bad}
        average = {average}
        positive = {positive}
      />
    </div>
  )
}

export default App