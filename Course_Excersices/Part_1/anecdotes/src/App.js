import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setpoints] = useState([0, 0, 0, 0, 0, 0, 0])

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )
  const handleAnecdotes = () => {
    setSelected(Math.floor(Math.random() * 7))
  }

  const temp1 = [...points]
  const handlevotes = () => {
    temp1[selected] += 1
    setpoints(temp1)
  }

  const Disvotes = (selected) => {
    return (
      <p>Has {temp1[selected.selected]} Votes</p>
    )
  }
  const [answer, setAnswer] = useState(points.indexOf(Math.max(...points)))
  
  const Stat = () =>
  {
    setAnswer(points.indexOf(Math.max(...points)))
    return (
      <div>
        <h1>Anecdote with Most Votes</h1>
        <p>{anecdotes[answer]}</p>
        <p>Has {Math.max(...points)} votes</p>
      </div>
    )
  }
  

  return (
    <>
      <div>
        {anecdotes[selected]}
      </div>
      <Button onClick={handleAnecdotes} text="Next Anecdote" />
      <Button onClick={handlevotes} text="Vote Here!!" />
      <Disvotes selected={selected} />
      <Stat/>
    </>
  )
}

export default App