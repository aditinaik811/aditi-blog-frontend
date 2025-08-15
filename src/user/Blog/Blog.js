import React, { useEffect, useState } from 'react'
import './Blog.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const API = process.env.REACT_APP_BASE_URL
const Blog = () => {

  const[category,setCategory]=useState([])
  const[blogs,setBlogs]=useState([])
  const navigate = useNavigate();
  const[blogLoading,setBlogLoading]=useState(false)
  const[categoryLoading,setCategoryLoading] = useState(false)

  
  

  useEffect(()=>{
    getCategory();
    getBlog();
   
  },[])

  
  const getCategory = ()=>{
    setCategoryLoading(true);
    axios.get(`${API}/category`)
    
    .then(result=>{
      console.log(result)
      setCategory(result.data.category)
      setCategoryLoading(false)
    })
    .catch(err=>{
      console.log(err)
      setCategoryLoading(false)

    })
  }

  const getBlog = ()=>{
    setBlogLoading(true)
    axios.get(`${API}/blog/`)
    .then(result=>{
      console.log(result)
      setBlogs(result.data.blog)
      setBlogLoading(false)
    })
    .catch(err=>{
      console.log(err)
      setBlogLoading(false)
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
  {!blogLoading && blogs.map((data) => (
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
  {blogLoading &&
    <img src={require('../../assets/loader.gif')}/>

    }
</div>

<div className='c-container'>
  <h3>All Category</h3>
  <div className='categories'>
    <button className="c-button" onClick={getBlog}>
      All Category List
    </button>
    {!categoryLoading && category.map((data) => (
      <button 
        key={data._id} 
        onClick={() => getBlogByCategory(data.name) } 
        className='c-button'
      >
        {data.name}
      </button>
    ))}
    {categoryLoading &&
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <img src={require('../../assets/loader.gif')} alt="Loading..." />
  </div>

    }
  </div>
</div>
    </div>
  )
}

export default Blog