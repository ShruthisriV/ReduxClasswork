import { useState } from 'react'
import './App.css'
import TodoRedux from './Components/TodoRedux'
import User from './Components/User'
import UserRedux from './Components/UserRedux'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <TodoRedux/> */}
      {/* <User></User>  //async function execution */}
      <UserRedux></UserRedux>
    </>
  )
}

export default App
