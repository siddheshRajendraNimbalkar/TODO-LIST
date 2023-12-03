"use client"
import React, { useState } from "react"

const page = ()=>{
  const[text,settext]=useState("")
  const[description,setdescription]=useState("")
  const[main,setmain]=useState([])

  const preventOnSubmit=(e)=>{
    e.preventDefault()
    setmain([...main,{text, description}])
    settext("")
    setdescription("")
  }

  let renderTask =<h2>NO TASK AVALABLE</h2>


renderTask=main.map((e, i)=>{
  return(
    <li key={i}>
      <h3>{e.text}</h3>
      <h5>{e.description}</h5>
      <button onClick={(i)=>{
        console.log(i)
          let copytask=[...main]
          copytask.splice(i,1)
          setmain(copytask)
      }}>Delete</button>
    </li>
  )
})
 


  return (
    <>
      <h1>My Todo List</h1>
      <form onSubmit={preventOnSubmit}>
        <input placeholder="Enter Text Here" value={text} onChange={(e)=>{
          settext(e.target.value)
        }}/>
        <input placeholder="Enter description here" value={description} onChange={(e)=>{
          setdescription(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
      <hr className="m-4"/>
      <div className="bg-red-400">
            {renderTask}
          
        </div>
    </>
  )
}

export default page 