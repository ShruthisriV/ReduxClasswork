import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseRefHook from './poc/UseRefHook';
import Stopwatch from './Components/Stopwatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseRefHook/> */}
      <Stopwatch/>
    </>
  )
}

export default App
