import React from "react";

const Post = ({ posts }) => {
  return (
    <div>
      {posts.map((posts) => (
        <div key={posts.id}>
          <h3>{posts.title}</h3>
          <a href={`/blog/${posts.slug}`}>
            <button>Read More</button>
          </a>
          <img src={posts.image} alt="Test Image" />
        </div>
      ))}
    </div>
  );
};

export default Post;
