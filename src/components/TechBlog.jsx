import techBlogs from "../data/techBlog"
import BlogCard from "./Card"
export default function TechBlog(){
    return(
        <>
        <h2>Tech Blogs</h2>
        <br /><div style={{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",height:"100%",width:"100%",alignItems: "stretch"}}>
        {techBlogs.map((blogs,index)=> (
            <BlogCard blogs={techBlogs[index]}/>
       ) )}
      </div></>
    )
}