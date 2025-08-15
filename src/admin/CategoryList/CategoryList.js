import axios from 'axios'
import React, { useEffect, useState } from 'react';
import '../CategoryList/CategoryList.css';
import { deleteObject, getStorage,ref as storageRef } from 'firebase/storage';
import {app} from '../../firebase';
import { useNavigate } from 'react-router-dom';
const API = process.env.REACT_APP_BASE_URL
const CategoryList = () => {
const [category,setCategory] = useState([]);
const navigate = useNavigate();


  
  useEffect(()=>{
    getCategory();
  },[])
  
  const getCategory = ()=>{
    axios.get(`${API}/category`)
    .then(res=>{
      console.log(res.data.category);
      setCategory(res.data.category);

    })
    .catch(err=>{
      console.log(err);
    })
  }

  const deleteCategory = (categoryData) => {
  if (window.confirm("Are you sure you want to delete?")) {
    const storage = getStorage(app);

  
    const imageUrl = categoryData.imageUrl;
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
        axios
          .delete(`${API}/category/${categoryData._id}`)
          .then((res) => {
            console.log("Deleted:", res.data);
            getCategory(); 
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
    <div className='category-wrapper'>
        {category.map(data=>(
          <div className='card' key = {data._id}>
            <div style={{width:'25%'}}>
            <p style={{fontWeight:'bold'}}>{data.name}</p>
          </div>
          <div style={{width:'25%'}}>
            <img className="cat-image" style={{height:'100px',width:'100px'}}src={data.imageUrl} alt="Category"/>
          </div>
          <div style={{width:'25%'}}>
            <button onClick={()=>{navigate('/admin/dashboard/edit-category',{state:{myData:data}})}} style={{backgroundColor:'purple'}} className='smBtn'>Edit</button>
          </div>
          <div style={{width:'25%'}}>
            <button onClick={()=>{deleteCategory(data)}} style={{backgroundColor:'red'}}className='smBtn'>Delete</button>
          </div>
    </div>
        ))}
    </div>
  )
}

export default CategoryList