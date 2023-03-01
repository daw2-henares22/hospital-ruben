import { useState } from 'react'
import './App.css'
import { Toolbar } from './components/Toolbar'
import { AppRouter } from './router'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <Toolbar/>
      <AppRouter/>
    </div>
  )
}

export default App
