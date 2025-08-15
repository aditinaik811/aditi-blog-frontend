import axios from 'axios'
import React, { useEffect, useState } from 'react';
import '../CommentList/CommentList.css';
import { deleteObject, getStorage,ref as storageRef } from 'firebase/storage';
import {app} from '../../firebase';
import { useNavigate } from 'react-router-dom';
const API = process.env.REACT_APP_BASE_URL
const CommentList = () => {
const [comments,setComments] = useState([]);
const navigate = useNavigate();

  
  useEffect(()=>{
    getComment();
  },[])
  
  const getComment = ()=>{
    axios.get(`${API}/comment`)
    .then(res=>{
      console.log(res.data.comments);
      setComments(res.data.comments);

    })
    .catch(err=>{
      console.log(err);
    })
  }

  const deleteComment = (commentId) => {
  if (window.confirm("Are you sure you want to delete?")) {
    axios.delete(`${API}/comment/`+commentId)
          .then((res) => {
            console.log(res);
            getComment();
          })
          .catch((err) => {
            console.error(err);
          });
}
}


  return (
    <div className='comment-container'>
        {comments.map(data=>(
          <div className='comment-card' key = {data._id}>
            <div style={{width:'250px'}}>
            <div style={{height:'100px',width:'250px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <p style={{width:'250px'}}>{data.email}</p>
              <button onClick={()=>{deleteComment(data._id)}} style={{border:'none',backgroundColor:'red',color:'white',borderRadius:'5px',width:'70px',height:'30px'}}>delete</button>
             </div>
            <p>{data.commentText}</p>
            <p>{data.timestamp}</p>
          </div>
        </div>
        ))}
    </div>
  )
}

export default CommentList