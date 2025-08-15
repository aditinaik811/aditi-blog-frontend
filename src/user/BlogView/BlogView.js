// // import React, { useState } from "react";
// // import "./BlogView.css";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // const API = process.env.REACT_APP_BASE_URL
// // const BlogView = () => {
// //   const [comment, setComment] = useState("");
 
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const email = localStorage.getItem('email')
// //   const name = localStorage.getItem('name');

// //   const { blogData } = location.state || {};
// //   console.log(blogData);

// //   const handleAddComment = () => {
// //     const token = localStorage.getItem('token')
// //     if(!token){
// //         console.log("Login First");
// //     }
// //     else{
// //     axios.post(`${API}/comment/add-comment`,
// //   {
// //     name: localStorage.getItem('name'),
// //     email: localStorage.getItem('email'),
// //     commentText:comment,
// //     blogId:blogData._id
// //   },
// //   {
// //     headers: {
// //       Authorization: `Bearer ${token}`
// //     }
// //   }
// // )
// // .then(response => {
// //   console.log(response.data);
  
// // })
// // .catch(error => {
// //   console.error(error);
// // });
// //     }
// // }

// //   if (!blogData) {
// //     return <p className="no-data">No blog data available</p>;
// //   }

// //   return (
// //     <div className="blog-detail-wrapper">
// //       <div className="blog-detail-container">
        
// //         {/* Back Button */}
// //         <button className="back-btn" onClick={() => navigate(-1)}>
// //         Back
// //         </button>

// //         <img
// //           src={blogData.imageUrl}
// //           alt={blogData.title}
// //           className="blog-detail-image"
// //         />
// //         <h1 className="blog-detail-title">{blogData.title}</h1>
// //         <p className="blog-detail-description">{blogData.description}</p>

// //         {/* Comment Section */}
// //         <div className="comment-section">
// //           <h3>Comments</h3>
// //            <p value={name} style={{color:'white'}}>{name}</p>
// //            <p value={email} style={{color:'white'}}>{email}</p>
// //           <textarea
// //             className="comment-box"
// //             placeholder="Write your comment..."
// //             value={comment}
// //             onChange={(e) => setComment(e.target.value)}
// //           ></textarea>
// //           <button className="add-comment-btn" onClick={handleAddComment}>
// //             Add Comment
// //           </button>
// // {/* 
// //           <div className="comment-list">
// //             {comment.map((c, index) => (
// //               <div key={index} className="comment-item">
// //                 {c}
// //               </div>
// //             ))}
// //           </div> */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BlogView;

// import React, { useEffect, useState } from "react";
// import "./BlogView.css";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const API = process.env.REACT_APP_BASE_URL;

// const BlogView = () => {
//   const [comment, setComment] = useState("");
//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const [allComments,setAllComments] = useState([])

  

//   const location = useLocation();
//   const navigate = useNavigate();
//   const email = localStorage.getItem("email");
//   const name = localStorage.getItem("name");

//   const { blogData } = location.state || {};
//   console.log(blogData);


//   useEffect(()=>{
//         axios.get(`${API}/comment/get-comments/${blogData._id}`)
//         .then(res=>{
//             console.log("Comments",res)
//             setAllComments(res.data.comments)
//             console.log(res.data.comments)
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//   },[])

//   const handleAddComment = () => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setShowLoginPopup(true);
//       setTimeout(() => setShowLoginPopup(false), 2000);
//       return;
//     }

//     axios
//       .post(
//         `${API}/comment/add-comment/${blogData._id}`,
//         {
//           name,
//           email,
//           commentText: comment,
//           blogId: blogData._id,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         console.log(response.data);
//         window.alert("Comment Added successfully")
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   if (!blogData) {
//     return <p className="no-data">No blog data available</p>;
//   }

//   return (
//     <div className="blog-detail-wrapper">
//       <div className="blog-detail-container">
//         <button className="back-btn" onClick={() => navigate(-1)}>
//           Back
//         </button>

//         <img
//           src={blogData.imageUrl}
//           alt={blogData.title}
//           className="blog-detail-image"
//         />
//         <h1 className="blog-detail-title">{blogData.title}</h1>
//         <p className="blog-detail-description">{blogData.description}</p>

       
//         <div className="comment-section">
//           <h3>Post a Comment</h3>
//           <p style={{ color: "white" }}>Name  {name}</p>
//           <p style={{ color: "white" }}>Email {email}</p>
//           <textarea className="comment-box" placeholder="Write your comment..." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
//           <div className="comment-btn-wrapper">
//             <button className="add-comment-btn" onClick={handleAddComment}>
//               Add Comment
//             </button>
//             {showLoginPopup && (
//               <span className="login-popup">Login first</span>
//             )}
//             <div>
//                 {
//                     allComments.map(commentData=>(
//                          <div className="comment-list">
//                             <p>{commentData.name}</p>
//                             <p>{commentData.commentText}</p>
//                         </div>
//                     ))
                        
                    
//                 }
//             </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogView;

import React, { useEffect, useState } from "react";
import "./BlogView.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_BASE_URL;

const BlogView = () => {
  const [comment, setComment] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [allComments, setAllComments] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");

  const { blogData } = location.state || {};

  useEffect(() => {
    if (blogData?._id) {
      axios
        .get(`${API}/comment/get-comments/${blogData._id}`)
        .then((res) => {
          setAllComments(res.data.comments);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [blogData]);

  const handleAddComment = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setShowLoginPopup(true);
      setTimeout(() => setShowLoginPopup(false), 2000);
      return;
    }

    axios
      .post(
        `${API}/comment/add-comment/${blogData._id}`,
        {
          name,
          email,
          commentText: comment,
          blogId: blogData._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        window.alert("Comment Added successfully");
        setComment("");
        // Add the new comment to the list without refresh
        setAllComments((prev) => [response.data.new_Comment, ...prev]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!blogData) {
    return <p className="no-data">No blog data available</p>;
  }

  return (
    <div className="blog-detail-wrapper">
      <div className="blog-detail-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          Back
        </button>

        <img
          src={blogData.imageUrl}
          alt={blogData.title}
          className="blog-detail-image"
        />
        <h1 className="blog-detail-title">{blogData.title}</h1>
        <p className="blog-detail-description">{blogData.description}</p>

        <div className="comment-section">
          <h3>Post a Comment</h3>
          <hr></hr>
          <p className="info">Name: {name}</p>
          <p className="info">Email: {email}</p>
          <textarea
            className="comment-box"
            placeholder="Write your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div className="comment-btn-wrapper">
            <button className="add-comment-btn" onClick={handleAddComment}>
              Add Comment
            </button>
            {showLoginPopup && (
              <span className="login-popup">Login first</span>
            )}
          </div>

          {/* Display comments */}
          <div className="comments-container">
            <h3>Comments</h3>
            <hr></hr>
            {allComments.length > 0 ? (
              allComments.map((commentData, index) => (
                <div className="comment-item" key={index}>
                  <div className="comment-header">
                    <span className="comment-name">{commentData.name}</span>
                    <span className="comment-time">
                      {new Date(commentData.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p className="comment-text">{commentData.commentText}</p>
                </div>
              ))
            ) : (
              <p className="no-comments">No comments yet. Be the first!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
