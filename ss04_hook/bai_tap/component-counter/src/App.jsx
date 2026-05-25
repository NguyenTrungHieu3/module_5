import { useState } from 'react'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <h3>Count: {count1}</h3>
      <button onClick={() => setCount1(count1 + 1)}>Add 1</button>
      <h3>Count: {count2}</h3>
      <button onClick={() => setCount2(count2 + 2)}>Add 2</button>
    </>
  )
}

export default App
