import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogs from './blogs.json'; 
import './BlogList.css';

const BlogList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(blogs.blogs);
  }, []);

  return (
    <section className="blog-list">
      {data.map(blog => (
        <Link key={blog.id} to={`/blog/${blog.id}`} className="blog-link">
          <div className="blog-post-preview">
            <h2 className="blog-post-title">{blog.title}</h2>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default BlogList;
