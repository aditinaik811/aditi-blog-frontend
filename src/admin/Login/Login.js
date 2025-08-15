import React, { useState } from 'react'
import '../Login/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
const API = process.env.REACT_APP_BASE_URL
const Login = () => {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const[isLoading,setIsLoading]=useState(false);


  const navigate = useNavigate();

  const submitHandler = (event) =>{
    event.preventDefault();
    setIsLoading(true)
    console.log(userName,password);
    axios.post(`${API}/auth/admin/login`,{
      userName:userName,
      password:password
    })
    .then(res=>{
      setIsLoading(false)
      console.log(res.data)
      localStorage.setItem('email',res.data.email);
      localStorage.setItem('fullName',res.data.fullName);
      localStorage.setItem('token',res.data.token);
      navigate('/admin/dashboard')

    })
    .catch(err=>{
      console.log(err)
    })
  }
  return (
  

    <div className='loginContainer'>
        <form onSubmit={submitHandler} className='LoginBox'>
          <img className='aditiImage' src={require('../../assets/Aditi.jpg')} alt='Aditi-Image'/>
          <h1 align="center">Aditi Blog App</h1>
          
          <input onChange ={(e)=>{setUserName(e.target.value)}} placeholder='username'/>
          <input onChange ={(e)=>{setPassword(e.target.value)}} type="password" placeholder='password'/>
          <button className='submitBtn'>{isLoading && <CircularProgress size={20} color='inherit'/>}<span style={{marginLeft:10}}>Submit</span></button>
       </form>
    </div>
  )
}

export default Login