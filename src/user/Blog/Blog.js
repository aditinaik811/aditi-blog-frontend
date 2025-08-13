import React, { useEffect, useState } from 'react'
import './Blog.css'
import axios from 'axios'
const API = process.env.REACT_APP_BASE_URL
const Blog = () => {

  const[category,setCategory]=useState([])
  const[blogs,setBlogs]=useState([])
  

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
  
  return (
    <div className='main-container'>
      <div className='b-container'>
          {
            blogs.map(data=>(
              <div className="blog-box" key={data._}>
                <img className='b-image' src={data.imageUrl} alt='blog'/>
                <p className='b-category'>{data.category}</p>
                <p className='b-title'>{data.title}</p>
              </div>
            ))
          }
      </div>
      <div className='c-container'>
        <h3>All category</h3>
        <div className='categories'>
          <button className="c-button" onClick={getBlog}>All Category List</button>
          {
            category.map(data=>(
              <div>
                <button  onClick={()=>{getBlogByCategory(data.name)}} className='c-button'>{data.name}</button>
                </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Blog