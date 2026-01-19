import { useState } from 'react'
import './App.css'
import  BlogCard from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import techBlogs from './data/techBlog.js'  
import Grid from '@mui/material/Grid';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Example from './components/HealthBlog.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Adventure from './components/Adventure.jsx';
import TechBlog from './components/TechBlog.jsx';
import CreateBlog from './components/CreateBlog.jsx';


function App() {
//   const [blog, setBlog] = useState("shiva")
// let create = (e) => {
//   e.preventDefault()
//   console.log("Blog created:", blog);
//   setBlog(()=>{
//     return "Hello guys My name is sunny and I am learning React"
//   })
// }

const router = createBrowserRouter([
        {
          path: "/healthblog",
          element: <Example />,
        },
        {
          path:"/login",
          element:<Login/>
        },
        
        {
path:"/",
element:<h1>Welcome to My Blog App</h1>
        },
        {
path:"/advBlog",
element:<Adventure/>
        },
        {
          path:"/techBlog",
          element:<TechBlog/>
        },
        {
          path:"/createblog",
          element:<CreateBlog/>
        }
    ]);
  return (
    <>
    
    <Navbar/>
    <RouterProvider router={router} />
    
    <br /><br />
 <img
  src="/home.jpg
"
  alt="Blog Hero"
  style={{ width: "100%", height: "500px" }}
/>


<Home/>

      {/* <div style={{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",height:"100%",width:"100%",alignItems: "stretch"}}>
        
      </div> */}
      <br /><br />
      <Footer/>
    </>
  )
}

export default App
