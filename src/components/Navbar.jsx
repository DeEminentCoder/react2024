import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [number, setnumber] = useState(0)
  const increase =()=>{
    setnumber(number+1)
  }
  return (
    <>
    <h1>{number}</h1>
    <button onClick={increase}>Increase</button>
    </>
  )
}

export default Navbar