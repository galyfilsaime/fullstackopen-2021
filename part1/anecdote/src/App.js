import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({anecdote}) => {
  return (
    <div>
      <h1>Anecdotes with most votes</h1>
      <p>{anecdote}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
  const [max, setMax] = useState(0)
  const anecWithPoints = {}
  points.forEach((key, i) => anecWithPoints[key] = anecdotes[i])

  const next = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    const maximum = Math.max.apply(null, copy)
    setPoints(copy)
    setMax(maximum)
  }

  return (
    <div>
      {anecdotes[selected]} <br/>
      has {points[selected]} votes
      <div>
        <Button handleClick={vote} text='vote'/>
        <Button handleClick={next} text='next anecdote'/>
      </div>
      <Display anecdote={anecWithPoints[max]}/>
    </div>
  )
}

export default App