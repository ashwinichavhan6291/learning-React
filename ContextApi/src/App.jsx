import React, { useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Child from './components/Child'

function App() {
  let[theme,setTheme]=useState("dark")
  return (
   <ThemeContext.Provider value={{theme,setTheme}}>
   <Child/>
   </ThemeContext.Provider>
  )
}

export default App