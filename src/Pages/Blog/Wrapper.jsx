import React from "react";
import Box from "./Box";

function Wrapper({ posts }) {
  return (
    <>
      <section className="main-content">
        <div className="container">
          <div className="row">
            {posts.map((p) => {
              return <Box post={p} key={p._id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Wrapper;
