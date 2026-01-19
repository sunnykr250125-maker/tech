import {useState} from 'react'
import BlogCard from "./Card.jsx";
import blogsData from "../data/homeBlog.js";
import { Description } from '@mui/icons-material';
export default function CreateBlog() {
let [item,newItems] = useState(blogsData);
    let [blogData,setBlogData] = useState({
        title:"",
        description:"",
        image:"",
        link:""
    })
    let setData = (e)=>{
        // e.preventDefault();
        const {name,value} = e.target
          setBlogData((prevdata)=>{
           // return {...prevdata,[e.target.name]:e.target.value,[e.target.name]:e.target.value,[e.target.name]:e.target.value}
           return {...prevdata,[name]:value}
          })
    }
let create = (e) => {
  e.preventDefault();
  newItems((prevItems)=>{
    return [blogData,...prevItems]
  })
  setBlogData({
        title:"",
        description:"",
        image:"",
        link:""
    })
}

  return (
   <>
    <div className="col-6 offset-2">
      <form action="/" onSubmit={create}>
        <h2>Create a New Blog Post</h2>
        <div className="row">
          <label className="form-label col-1"  ><h4>Title:</h4></label>
            <input className="form-control col-6 offset-0" type="text" name="title" value={blogData.title} onChange={setData} minLength={10} maxLength={50} required />
        </div>
        <div className="row">
          <label className="form-label col-1"><h4>Content:</h4></label>
            <textarea className="form-control" name="description" rows="10" value={blogData.description} onChange={setData} minLength={10} maxLength={500} required></textarea>
        </div>
        <div className="row">
          <label className="form-label col-2"><h4>ImageUrl:</h4></label>
            <input className="form-control" type="text" name="image" value={blogData.image} onChange={setData} required />
        </div>
        <div className="row">
          <label className="form-label col-2"><h4>BlogLink:</h4></label>
            <input className="form-control" type="text" name="link" value={blogData.link} onChange={setData} required />
        </div>
        <br /><br />
        <div className="col-1"><button style={{backgroundColor:"rgb(33, 142, 238)"}} type="submit">Submit</button></div>
        {/* DISPLAY BLOGS */}
      <h2>New Blogs</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)",gap:"20px",padding:"20px"}}>
        {item.map((blogs, index) => (
          <BlogCard key={index} blogs={item[index]} />
        ))}
    </div>
      </form>
    </div> 
     
      
      
   </>
  );
}