import { useMemo,useState } from 'react'
import './App.css'


function App() {
  let [count, setCount] = useState(0)
  let [count1, setCount1] = useState(0)
  console.log("parent count");
  const calc=useMemo(()=>{
    return count*2

  },[count])

  return (
    <>
    <p>[count]</p>
   
        <button onClick={() => setCount(count+=1)}>Parent Count{count}</button>
        <button onClick={() => setCount1(count1+=1)}>Parent Count1{count1}</button>
      
    </>
  )
}

export default App
