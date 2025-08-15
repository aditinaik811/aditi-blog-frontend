import React from 'react'
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div style={{width:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img className='footer-image' src={require('../../assets/Aditi.png')}/>
        </div>
        <div style={{width:'80%',display:'flex',justifyContent:'center',alignItems:'center',gap:'30px'}}>
            <a className="social-link"href="https://www.instagram.com/aditi_naik811?igsh=MTl2Nm94cjVpdDd2MA==" ><img style={{width:'25px',height:'25px'}}src={require('../../assets/instagram.png')}/>Instagram</a>
            <a className="social-link"href="https://github.com/aditinaik811" ><img style={{width:'25px',height:'25px'}}src={require('../../assets/social.png')}/>Github</a>
            <a className="social-link"href="https://www.linkedin.com/in/aditi-naik-667aa1318/" ><img style={{width:'25px',height:'25px'}}src={require('../../assets/linkedin.png')}/>Linkedin</a>
            <a className="social-link"href="https://youtube.com/@aduskitchen1787?si=Z-H_DCCVbaFefmeK" ><img style={{width:'25px',height:'25px'}}src={require('../../assets/youtube.png')}/>Youtube</a>
            <a className="social-link" href="#" ><img style={{width:'25px',height:'25px'}}src={require('../../assets/facebook.png')}/>Facebook</a>
            <a className="social-link" href="#" ><img style={{width:'25px',height:'25px'}}src={require('../../assets/facebook.png')}/>Twitter</a>
            
            
        </div>
    </div>
  )
}

export default Footer