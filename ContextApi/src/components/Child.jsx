import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Child() {
    const{theme,setTheme}=useContext(ThemeContext);
  return (
    
    <div>

      <p>theme : {theme}</p>
        <button onClick={()=>setTheme(theme==="dark" ? "light" : "dark")}>button</button>
    </div>

  )
}

export default Child