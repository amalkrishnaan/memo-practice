import { useState } from 'react'
import './App.css'
import Child from './Child'

function App(){
  let [count,setCount] = useState(0)
  console.log("parent count");
  return (
    <>
   <button onClick={()=>setCount(count+=1)}>Parent Count{count}</button>
   <Child/>
    </>
  )
}

export default App
