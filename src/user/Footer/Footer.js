import React from 'react'
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div style={{width:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img className='footer-image' src={require('../../assets/Aditi.png')}/>
        </div>
        <div style={{width:'80%',display:'flex',justifyContent:'center',alignItems:'center',gap:'30px'}}>
            <a className='footer-link'>Facebook</a>
            <a className='footer-link'>Youtube</a>
            <a className='footer-link'>Twitter</a>
            <a className='footer-link'>Instagram</a>
        </div>
    </div>
  )
}

export default Footer