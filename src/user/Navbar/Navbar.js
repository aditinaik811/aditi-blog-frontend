import React, { useState, useEffect } from 'react';
import '../Navbar/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLogin(!!token); // true if token exists, false otherwise
  }, []);

  return (
    <div className='navbar'>
      <div>
        <h1 className='myLogo'>Aditi Ravindra Naik – Thoughts, Stories & Ideas</h1>
      </div>
      <div className='menu'>
        <Link className={location.pathname==='/home'?'links-active':'links'} to='/home'>Home</Link>
        <Link className={location.pathname==='/blog'?'links-active':'links'}  to='/blog'>Blog</Link>
        <Link className={location.pathname==='/about'?'links-active':'links'}  to='/about'>About</Link>
        <Link className={location.pathname==='/contact'?'links-active':'links'}  to='/contact'>Contact</Link>
        
        {!isLogin && <Link className={location.pathname==='/login'?'links-active':'links'} to='/login'>Login</Link>}
        <Link className={location.pathname==='/signup'?'links-active':'links'}  to='/signup'>Signup</Link>
        {isLogin && <Link className={location.pathname==='/logout'?'links-active':'links'}  onClick={() => {
          localStorage.clear();
          setIsLogin(false);
        }}>Logout</Link>}
      </div>
    </div>
  );
};

export default Navbar;
