import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <h1>Todos List</h1>
        <div className='links'>
            <Link to='/' >Home</Link>
            <Link to='/create'>SignUp</Link>
            <Link to='/form'>Form</Link>
            <Link to='/formhook'>FormHook</Link>
        </div>
    </nav>
  )
}

export default Navbar