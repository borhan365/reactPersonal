import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Excerpt() {
  const [post, setPost] = useState({});

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const featchPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    featchPost();
  }, [path]);

  return (
    <>
      <div className="meta open-sans-font">
        <span>
          <i className="fa fa-user"></i>
          <Link to={`/posts?user=${post.username}`}>{post.username}</Link>
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i>
          {new Date(post.createdAt).toDateString()}
        </span>
        {/* <span><i className="fa fa-tags"></i> wordpress, business, economy, design</span> */}
      </div>
    </>
  );
}

export default Excerpt;
