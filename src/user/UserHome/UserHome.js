import { useEffect, useState } from 'react'
import '../UserHome/UserHome.css'
import axios from 'axios'
import Footer from '../Footer/Footer'
const API = process.env.REACT_APP_BASE_URL
const UserHome = () => {
  const[category,setCategory]=useState([])
  const[blogs,setBlogs]=useState([])
  useEffect(()=>{
    getCategory();
    getBlog();
  },[])


  const getCategory = ()=>{
    axios.get(`${API}/category/latest-category/3`)
    .then(result=>{
      console.log(result)
      setCategory(result.data.Category)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const getBlog = ()=>{
    axios.get(`${API}/blog/latest-post/4`)
    .then(result=>{
      console.log(result)
      setBlogs(result.data.Blog)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  
  return (
    <div>
        <div className='banner'>
          <div style={{width:'50%'}}>
              <img className="banner-logo"src={require('../../assets/logo.jpg')}  />
          </div>
          <div>
            <p className='welcome'>Welcome to</p>
            <h1 className='home-heading'>Aditi Ravindra Naik Blog</h1>
          </div>
        </div>

{/* ************Latest Category*********** */}
        <h1 className='heading'>Latest Category</h1>
        <div className='category-container'>
          {
            category.map(data=>(
              <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'25%',alignItems:'center'}} key={data._id}>
                <img className='category-image' src={data.imageUrl}/>
                <p className='category-title'>{data.name}</p>
                </div>
            ))
          }
        </div>

        {/* ************Latest Blogs************ */}
        <h1 className='heading'>Latest Blog</h1>
        <div className='blog-container'>
          {
            blogs.map(data=>(
              <div className="blog"key={data._}>
                <img className='blog-image' src={data.imageUrl} alt='blog'/>
                <p className='blog-category'>{data.category}</p>
                <p className='blog-title'>{data.title}</p>
              </div>
            ))
          }
        </div>
          <Footer/>
    </div>
  )
}

export default UserHome