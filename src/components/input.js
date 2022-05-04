import React, { useState } from 'react'
import './input.css'
import { saveToDo } from '../features/todoslice'
import { useDispatch } from 'react-redux'
 const Input = () => {
     const [input,setInput] = useState('')
     const dispatch=useDispatch()
     const  addToDo = () => {
    console.log(`Adding ${input}`)
    dispatch(saveToDo({
      item:input,
      done:false,
      id:Date.now()
    }))
    }
  return (
    <div className='input'>
    <input type='text' value={input} onChange={e=>setInput(e.target.value)}></input>
    <button onClick={addToDo}>add</button>
    </div>
  )
}
export default Input