import React from 'react'
import { Link } from 'react-router-dom'

function AboutUS() {
  return (
    <>
        <h1 style={{color:'purple'}}> About Products!</h1>
        <Link to='/aboutus/1'>Product 1</Link>
        <br />
        <Link to='/aboutus/2'>Product 2</Link>
        <br />
        <Link to='/aboutus/3'>Product 3</Link>
    </>
  )
}

export default AboutUS