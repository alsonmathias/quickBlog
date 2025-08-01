import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data } from "../assets/assets";
import Navbar from "../components/Navbar";
const Blog = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const fetcBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };
  useEffect(() => {
    fetcBlogData();
  }, []);

  return (
    data ? (
      <div className="relative">
        <Navbar/>
        <div></div>
        <div></div>
      </div>
    ) : (
      <div>Loading...</div>
    )
  );
}

export default Blog;
