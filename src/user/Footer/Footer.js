import React from 'react'
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div style={{width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img className='footer-image' src={require('../../assets/Aditi.jpg')}/>
        </div>
        <div style={{width:'50%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <a className='footer-link'>Facebook</a>
            <a className='footer-link'>Youtube</a>
            <a className='footer-link'>Twitter</a>
            <a className='footer-link'>Instagram</a>
        </div>
    </div>
  )
}

export default Footer