import React, { useState, useEffect, useRef } from 'react';
import uuid from 'uuid/v4';
import { Mapping } from './Mapping';
import { Header } from './Header';
import { Footer } from './Footer';

import '../css/createBlog.css';

export const CreateBlog = () => {
  const [redirect, setRedirect] = useState(false);

  const refUserName = useRef();
  const refTitle = useRef();
  const refContent = useRef();

  useEffect(() => {
    document.title = 'Create Blog';
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const blog = {
      uuid: uuid(),
      userName: refUserName.current.value,
      title: refTitle.current.value,
      content: refContent.current.value,
      today: new Date().toLocaleString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    let tempBlogArr = [];

    const blogs = JSON.parse(localStorage.getItem('blog'));
    blogs ? blogs.map(blog => tempBlogArr.push(blog)) : tempBlogArr.push();

    tempBlogArr.push(blog);
    localStorage.setItem('blog', JSON.stringify(tempBlogArr));
    setRedirect(() => true);
  };

  if (redirect) {
    return <Mapping />;
  } else {
    return (
      <>
        <Header />
        <section className="container">
          <section className="createBlog">
            <p className="label">User Name</p>
            <input
              name="username"
              type="text"
              placeholder="Please enter a username"
              maxLength="20"
              autoFocus
              ref={refUserName}
            ></input>

            <p className="label">Title</p>
            <input
              name="title"
              type="text"
              placeholder="Please enter a title"
              maxLength="25"
              ref={refTitle}
            ></input>

            <p className="label">Blog</p>
            <textarea
              rows="20"
              cols="100"
              wrap="hard"
              name="content"
              maxLength="800"
              ref={refContent}
            ></textarea>

            <button className="add-btn" type="button" onClick={handleSubmit}>
              Add
            </button>
          </section>
        </section>
        <Footer />
      </>
    );
  }
};
