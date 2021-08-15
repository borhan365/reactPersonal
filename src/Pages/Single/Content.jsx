import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Content() {
  const PF = "http://localhost:5000/images/";
  const location = useLocation();
  const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path); 
            setPost(res.data);
            console.log(res.data)
        };
        getPost();
    }, [path]);

  return (
    <>
      <h1 className="text-uppercase text-capitalize">{post.title}</h1>
      <div className="single__thumb">
        <img
          src={ PF + post.photo}
          className="img-fluid post__details__img"
          alt="test"
        />
      </div>
      <div className="blog-excerpt open-sans-font pb-5 para">
        <p> {post.desc} </p>
      </div>
    </>
  );
}

export default Content;
