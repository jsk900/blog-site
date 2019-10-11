import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

import '../css/showBlog.css';

export const ShowDetail = props => {
  const { userName, title, content, today } = props.location.state;
  useEffect(() => {
    document.title = 'Show Blog';
  });

  return (
    <>
      <Header />
      <section className="show-blog-container">
        <div className="card">
          <p className="blog-p">User</p>
          <p className="blog-p"> {userName}</p>

          <p className="blog-p">Title</p>
          <p className="blog-p"> {title}</p>

          <p className="blog-p">Creation Date</p>
          <p className="blog-p"> {today}</p>

          <p className="blog-p">Blog</p>
          <p className="blog-p"> {content}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};
