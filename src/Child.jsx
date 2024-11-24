import React  from 'react'
import { useState,memo } from 'react'

const Child =() =>{
    let [count,setCount] = useState(0)

console.log("child count");
return (
    <>
    <button on onClick={()=>setCount(count+=1)}>Child Count{count}</button>
    </>
)
}
export default memo(Child)