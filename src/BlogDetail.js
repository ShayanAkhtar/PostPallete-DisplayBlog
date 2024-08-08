import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogs from './blogs.json'; 
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const selectedBlog = blogs.blogs.find(blog => blog.id === parseInt(id, 10));
    setBlog(selectedBlog);
  }, [id]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-detail">
      <h1 className="blog-detail-title">{blog.title}</h1>
      <section className="blog-detail-content">
        {blog.content.map((section, index) => {
          if (section.type === 'paragraph') {
            return <p key={index}>{section.text}</p>;
          } else if (section.type === 'heading') {
            switch (section.level) {
              case 2:
                return <h2 key={index}>{section.text}</h2>;
              case 3:
                return <h3 key={index}>{section.text}</h3>;
              default:
                return null;
            }
          } else if (section.type === 'list') {
            return (
              <ul key={index}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </section>
    </div>
  );
};

export default BlogDetail;
