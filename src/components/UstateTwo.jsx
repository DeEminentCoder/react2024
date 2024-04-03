import React from 'react'
import { useState } from 'react'

const UstateTwo = () => {
    const [myNum, setmyNum] = useState(0)
  return (
    <>
    <h1>{myNum}</h1>
    <button onClick={()=>setmyNum(myNum+10)}>Increase</button>
    </>
  )
}

export default UstateTwo