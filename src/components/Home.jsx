import blogsData from "../data/homeBlog.js";
import BlogCard from "./Card";
 
export default function Home() {
    
  return (

    <div style={{
      
      
      display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",height:"100%",width:"100%",alignItems: "stretch"}}>
        {blogsData.map((blogs,index)=>
          (  <BlogCard blogs={blogsData[index]}/>)
        )}
    </div>
  );
}