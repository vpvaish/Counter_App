import React, { useState } from 'react'

export default function Sqrt() {
    const [x, setX] = useState(4);

    function Find(){
        setX(Math.sqrt(x))   
    }

  return (
    <div>
      <h1>
        Let's Find Sqrt of  : {x} 
      </h1>
      <button onClick={Find}> submit </button>
    </div>
  )
}