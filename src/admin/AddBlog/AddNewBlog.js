import React, { useEffect, useState } from "react";
import "../AddCategory/AddCategory.css";
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { app } from "../../firebase";
import axios from "axios";
import { useLocation, useNavigate} from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import CircularProgress from '@mui/material/CircularProgress';
const API = process.env.REACT_APP_BASE_URL
const AddNewBlog = () => {


  const [blogName, setBlogName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const[blog,setBlog] =useState("")
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const[CategoryList,setCategoryList]=useState([]);
  const[isLoading,setIsLoading]=useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getCategory();
    console.log(location.state);
    if (location.state != null) {
      setCategoryName(location.state.myData.category);
      setImageUrl(location.state.myData.imageUrl);
      setBlogName(location.state.myData.title);
      setBlog(location.state.myData.description);
    }
  }, []);

  const getCategory = ()=>{
    axios.get(`${API}/category`)
    .then(res=>{
      console.log(res.data.category);
      setCategoryList(res.data.category);

    })
    .catch(err=>{
      console.log(err);
    })
  }

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleBlog = (content,delta,source,editor)=>{
      console.log(content);
      setBlog(content);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    if (location.state == null) {
      
      
      const storage = getStorage(app);
      const myRef = storageRef(storage, `blog/${Date.now()}`);
      await uploadBytes(myRef, file);
      const uploadedImageUrl = await getDownloadURL(myRef);
      console.log(uploadedImageUrl);
      axios.post(`${API}/blog`, {
          title:blogName,
          category: categoryName,
          description:blog,
          imageUrl:uploadedImageUrl
        },{
          headers:{
            Authorization:"Bearer "+localStorage.getItem('token')
          }
        })
        .then((res) => {
          setIsLoading(false)
          console.log(res.data);
          navigate("/admin/dashboard/blog-list");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (file == null) {
        axios.put(`${API}/`+location.state.myData._id, {
            title:blogName,
            category: categoryName,
            description:blog,
            imageUrl: location.state.myData.imageUrl,
          })
          .then((res) => {
            console.log(res.data);
            navigate("/admin/dashboard/blog-list");
          })
          .catch((err) => {
            console.log(err);
          });
      }

      else{
      
      const storage = getStorage(app);
      const myRef = storageRef(storage, `${location.state.myData.imageUrl}`);
      await uploadBytes(myRef, file);
      const uploadedImageUrl = await getDownloadURL(myRef);
      console.log(uploadedImageUrl);
      axios.put(`${API}/blog/`+location.state.myData._id, {
          title:blogName,
          category: categoryName,
          description:blog,
          imageUrl:uploadedImageUrl
        })
        .then((res) => {
          console.log(res.data);
          navigate("/admin/dashboard/blog-list");
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }
  };
  return (
    <div style={{height:'100vh',overflow:'scroll',padding:'10px'}} className="categoryContainer">
      <p>Add New Blog</p>
      <form onSubmit={submitHandler} >
        <input value={blogName} onChange={(e) => {setBlogName(e.target.value);}} type="text" placeholder="Blog Title"/>
        {/* <input value={blog} onChange={(e) => {setBlog(e.target.value);}} type="text" placeholder="Blog"/> */}
        <ReactQuill style={{marginTop:'10px',height:'300px',marginBottom:'10px',backgroundColor:'white'}} 
         onChange={handleBlog} value={blog}
        />
        {/* <input value={categoryName} onChange={(e) => {setCategoryName(e.target.value);}} type="text" placeholder="Category"/> */}
        <select onChange={(e)=>setCategoryName(e.target.value)}
         value={categoryName} style={{width:'100%', height:'40px', marginTop:'50px', marginBottom:'10px',border:'none',borderRadius:'10px',padding:'10px'}}>
          <option>select Category</option>
          {CategoryList.map(data=>(
            <option key={data._id} value={data.name}>{data.name}</option>
          ))}
        </select>
        <input style={{'width':'100px'}}onChange={(e) => {fileHandler(e);}} type="file" />
        {imageUrl != null && ( <img alt="Category" style={{ width: "100%", height: "200px" }} src={imageUrl} />)}
        <button className='submitButton'>{isLoading && <CircularProgress size={20} color='inherit'/>}<span style={{marginLeft:10}}>Submit</span></button>
      </form>
    </div>
  );
};

export default AddNewBlog;
