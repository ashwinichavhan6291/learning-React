import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {fetchTodos} from './features/todo'
function App() {

  const res=useSelector((state)=> state);
  console.log(res);
  const dispatch=useDispatch();

  if(res.todo.isLoading) return <h1>Loading....</h1>
  return (
  <>
 
  <button onClick={()=>dispatch(fetchTodos())}>Fetch Todos</button>

  {res.todo.data && 
  res.todo.data.map((item)=>(
    <li>{item.title}</li>
  ))
 
 }
  </>

  )
}

export default App