import React from "react";
import { Link } from "react-router-dom";

function Box({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <>
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container">
          <div className="post-thumb blogpost__thumb">
            <Link
              to="/single"
              className="d-block position-relative overflow-hidden"
            >
              <img src={PF + post.photo} className="img-fluid" alt={post.title} />
            </Link>
          </div>
          <div className="post-content">
            <div className="entry-header">
              <h3>
                <Link to={`/single/${post._id}`}>
                  <p>{post.title}</p>
                </Link>
              </h3>
            </div>
            <div>
              <p>{new Date(post.createdAt).toDateString()}</p>
            </div>
            <div className="entry-content open-sans-font">
              <p>{post.desc}</p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Box;
