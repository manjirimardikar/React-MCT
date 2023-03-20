import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarcontent">
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/contact-us'>Contact</Link></li>
            <li><Link to='/' onClick={()=>{
              
              localStorage.clear()
            }}>Logout</Link></li>


          </ul>

        </div>
    </div>
  )
}
