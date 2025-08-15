import React from 'react'
import '../Dashboard/Dashboard.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Dashboard = () => {
  const navigate=useNavigate();
  const logoutHandler=()=>{
    localStorage.clear()
    navigate('/login')
  }
  return (
  <div className='container'>
    <div className='sideNav'>
      <div className='logoContainer'>
          <img className="logo" src={require('../../assets/Aditi.png')} alt="developer"/>
          <h1 className='logoHeading'>Aditi Blog App</h1>
          
      </div>
      <Link to="/admin/dashboard" className='link' style={{background:'orange'}}><DashboardIcon/><span style={{marginLeft:10}}>Dashboard</span></Link>
      <Link to="/admin/dashboard/blog-list"  className='link'><FormatListBulletedIcon/><span style={{marginLeft:10}}>Blog List</span></Link>
      <Link to="/admin/dashboard/add-blog"  className='link'><PostAddIcon/><span style={{marginLeft:10}}>Add Blog</span></Link>
      <Link to="/admin/dashboard/category-list"  className='link'><CategoryIcon/><span style={{marginLeft:10}}>Category List</span></Link>
      <Link to="/admin/dashboard/add-category"  className='link'><AddBoxIcon/><span style={{marginLeft:10}}>Add Category</span></Link>
      <Link to="/admin/dashboard/comment" className='link'><PostAddIcon/><span style={{marginLeft:10}}>comments</span></Link>
      <Link onClick={logoutHandler} className='link'><LogoutIcon/><span style={{marginLeft:10}}>Logout</span></Link>
    </div>
    <div className='mainContent'>
          <Outlet/>
    </div>
  </div>
  )
}

export default Dashboard