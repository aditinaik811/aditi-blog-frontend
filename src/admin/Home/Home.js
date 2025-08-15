import axios from 'axios'
import React, { useEffect, useState } from 'react';
import '../CategoryList/CategoryList.css';
import { deleteObject, getStorage,ref as storageRef } from 'firebase/storage';
import {app} from '../../firebase';
import { useNavigate } from 'react-router-dom';
const Home = () => {
const [blogs,setBlogs] = useState([]);
const navigate = useNavigate();
const API = process.env.REACT_APP_BASE_URL
  
  useEffect(()=>{
    getBlogs();
  },[])
  
  const getBlogs = ()=>{
    axios.get(`${API}/blog`)
    .then(res=>{
      console.log(res.data.blog);
      setBlogs(res.data.blog.reverse());

    })
    .catch(err=>{
      console.log(err);
    })
  }

  const deleteBlog = (blogData) => {
  if (window.confirm("Are you sure you want to delete?")) {
    const storage = getStorage(app);

    const imageUrl = blogData.imageUrl;
    const start = imageUrl.indexOf("/o/") + 3;
    const end = imageUrl.indexOf("?alt=");
    const encodedPath = imageUrl.slice(start, end);
    const decodedPath = decodeURIComponent(encodedPath); 

    if (!decodedPath) {
      console.error("Invalid image URL format.");
      return;
    }

    const myRef = storageRef(storage, decodedPath); 

    deleteObject(myRef)
      .then(() => {
        axios.delete(`${API}/blog/${blogData._id}`,{
          headers:{
            Authorization:"Bearer "+localStorage.getItem('token')
          }
        })
          .then((res) => {
            console.log("Deleted:", res.data);
            getBlogs(); 
          })
          .catch((err) => {
            console.error("Backend deletion failed:", err);
          });
      })
      .catch((err) => {
        console.error("Firebase delete failed:", err);
      });
  }
};


  return (
    <div>
        {blogs.map(data=>(
          <div className='card' key = {data._id}>
            <div style={{width:'35%'}}>
            <p>{data.title}</p>
          </div>
          <div style={{width:'20%'}}>
            <img className="cat-image" style={{height:'100px',width:'100px'}}src={data.imageUrl} alt="Category"/>
          </div>
          <div style={{width:'20%'}}>
            <button onClick={()=>{navigate('/admin/dashboard/edit-blog',{state:{myData:data}})}} style={{backgroundColor:'purple'}} className='smBtn'>Edit</button>
          </div>
          <div style={{width:'20%'}}>
            <button onClick={()=>{deleteBlog(data)}} style={{backgroundColor:'red'}}className='smBtn'>Delete</button>
          </div>
    </div>
        ))}
    </div>
  )
}

export default Home