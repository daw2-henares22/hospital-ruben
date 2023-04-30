import { useState } from 'react'
import './App.css'
import { Toolbar } from './components/Toolbar'
import { AppRouter } from './router'
import { Themes } from './theme/themes'
import { ThemeProvider } from 'styled-components'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <Toolbar/>
      <ThemeProvider themes={Themes['light']}>
      <AppRouter/>
      </ThemeProvider>
    </div>
  )
}

export default App
