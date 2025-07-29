import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <p className='myLogo'><span className='logo'>Aditi</span>Ravindra Naik</p>
        </div>
        <div className='menu'>
            <Link className='links' to='/home'>Home</Link>
            <Link className='links' to='/blog'>Blog</Link>
            <Link className='links' to='/about'>About</Link>
            <Link className='links' to='/contact'>Contact</Link>
            <Link className='links' to='/login'>Login</Link>
            
        </div>
    </div>
  )
}

export default Navbar
