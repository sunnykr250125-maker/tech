import adventureBlogs from "../data/advBlog"; 
import BlogCard from "./Card.jsx";
export default function Adventure() {
    
  return (
    <>
    <h2>Adventurous Blogs</h2>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",padding:"20px"}}>
      {adventureBlogs.map((blogs,index)=>(
        <BlogCard blogs={adventureBlogs[index]}/>
      ))}
    </div>
    </>
  );
}