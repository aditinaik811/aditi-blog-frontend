import React, { useEffect, useState } from 'react'
import './Blog.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const API = process.env.REACT_APP_BASE_URL
const Blog = () => {

  const[category,setCategory]=useState([])
  const[blogs,setBlogs]=useState([])
  const navigate = useNavigate();
  

  useEffect(()=>{
    getCategory();
    getBlog();
   
  },[])

  
  const getCategory = ()=>{
    axios.get(`${API}/category`)
    .then(result=>{
      console.log(result)
      setCategory(result.data.category)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const getBlog = ()=>{
    axios.get(`${API}/blog/`)
    .then(result=>{
      console.log(result)
      setBlogs(result.data.blog)
    })
    .catch(err=>{
      console.log(err)
    })
  }


  const getBlogByCategory=(cat)=>{
     
    axios.get(`${API}/blog/category/`+cat)
    .then(result=>{
      console.log(result)
      setBlogs(result.data.blog)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const blogDetailHandler = (blogData)=>{
   
    navigate('/blog-view', { state: { blogData } });
  };


  
  return (
    <div className='main-container'>
      <div className='b-container'>
  {blogs.map((data) => (
    <div 
      className="blog-box" 
      key={data._id} 
      onClick={() => blogDetailHandler(data)}
    >
      <img className='b-image' src={data.imageUrl} alt='blog' />
      <p className='b-category'>{data.category}</p>
      <p className='b-title'>{data.title}</p>
    </div>
  ))}
</div>

<div className='c-container'>
  <h3>All Category</h3>
  <div className='categories'>
    <button className="c-button" onClick={getBlog}>
      All Category List
    </button>
    {category.map((data) => (
      <button 
        key={data._id} 
        onClick={() => getBlogByCategory(data.name)} 
        className='c-button'
      >
        {data.name}
      </button>
    ))}
  </div>
</div>
    </div>
  )
}

export default Blog