import { useState } from 'react'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <>
      <h1> How high can you click? </h1>
      <button className="zee-button" onClick={handleClick}>
        click 
      </button>
      <div> Count! {count} </div>
    </>
  )
}

export default App
