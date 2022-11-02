import { useState } from 'react'

const Button1 = (props) => {
  console.log(props)  
  return (  
  <button onClick={props.handleNextAnecdote}>
    {props.text}
  </button> 
)
}

const Button2 = (props) => {
  console.log(props)
  return (  
  <div>
    <button onClick={props.voteForAnecdote}>
    {props.text}
    </button> 
  </div>
)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [table, voteCounter] = useState(new Uint8Array(anecdotes.length))

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteForAnecdote = () => {
    const copy = [...table]
    voteCounter(copy[selected] += 1)
    voteCounter(copy)
  }

  console.log('selected =', selected)
  console.log(table)
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>"{anecdotes[selected]}"</p>
      <p>This Anecdote has {table[selected]} votes.</p>
      <Button1 handleNextAnecdote={handleNextAnecdote} text="Next Anecdote" />
      <Button2 voteForAnecdote={voteForAnecdote} selected={selected} text="Vote For Anecdote" table={table} />
      <h2>Anecdote with most votes:</h2>
      <p>"{anecdotes[table.indexOf(Math.max(...table))]}"</p>
      <p>With {Math.max(...table)} votes.</p>          </div>
  )
}

export default App