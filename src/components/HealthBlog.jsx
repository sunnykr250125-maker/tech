import healthBlogs from "../data/healthBlog";
import BlogCard from "./Card.jsx";


export default function HealthBlogs() {
    
  return (
    <>
       <h2>Blogs for Healthy Life Style</h2>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",padding:"20px"}}>
        {healthBlogs.map((blogs, index) => (
          <BlogCard blogs={healthBlogs[index]} />
        ))}
    </div>
    </>
  );
}