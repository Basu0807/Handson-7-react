import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const LinkCompo = () => {
  return (
    <>
    <div className='header'>
        <Link className="heading" to="/">Home</Link>
        <Link className="heading" to="/student">Students</Link>
        <Link className="heading" to="/contact">Contact Us</Link>
        
    </div>
    </>
    
  )
}

export default LinkCompo