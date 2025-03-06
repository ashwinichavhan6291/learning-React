import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import "./App.css";
function App() {
  let[Sidebar,setSidebar]=useState(false);

  return (
  <>

<div className='cursor-pointer' onClick={()=>setSidebar(!Sidebar)}>
<IoMdMenu className='w-10 h-6 pr-3'/>
</div>

{!Sidebar && 


    <div className="h-screen w-64 bg-gray-900 text-white p-4 ">
      <div className='flex'>
      
       
    <div className='ml-auto w-4 cursor-pointer' onClick={()=>setSidebar(!Sidebar)}>
      
    <IoCloseSharp className='w-10 h-6 pr-3' />
    </div>

      </div>
    
      <h2 className="text-lg font-bold mb-4">My Sidebar</h2>
      <ul>
        <li className="p-3 hover:bg-gray-800">Dashboard</li>
        <li className="p-3 hover:bg-gray-800">Profile</li>
        <li className="p-3 hover:bg-gray-800">Settings</li>
        <li className="p-3 hover:bg-gray-800">Logout</li>
      </ul>
    </div>
  
}

  </>
  )
}

export default App