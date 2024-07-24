/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import axios from 'axios'

const Blogs = () => {
  const [blogs,setBlogs]=useState([])

  const sendRequest=async()=>{
    const res=await axios.get("http://localhost:8001/api/v1/blog/getAllblogs").catch((err)=>console.log(err))

    const data=await res.data;
    return data;
  }

  useEffect(()=>{
    sendRequest().then((data)=>setBlogs(data.blogData))
  },[])

  return (
    <div>
      {blogs && blogs.map((blog, index) => (
        <Blog key={index} {...blog} />
      ))}
    </div>
  )
}

export default Blogs