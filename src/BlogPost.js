import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, content }) => {
  return (
    <article className="blog-post">
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-content">{content}</p>
    </article>
  );
};

export default BlogPost;
