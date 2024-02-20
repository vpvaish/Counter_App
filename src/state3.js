import React, { useState } from 'react'

export default function State3() {

    const [Name,setN] = useState("")

    const [M_Name,setM] = useState("")

    const [L_Name,setNL] = useState("")


    setN("Name")


    

    return (
    <div>
      <h1>
        hello everyone !!!

<h2>My name is {Name} </h2>

        <br></br>
        <input placeholder='name' type='text' />

        <input placeholder='middle name' type='text'/>

        <input placeholder='last name' type='text'/>
      </h1>
    </div>
  )
}
