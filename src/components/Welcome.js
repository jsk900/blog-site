import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAction } from '../actions';
import { Header } from './Header';
import { Footer } from './Footer';

import '../css/welcome.css';

export const Welcome = () => {
  useEffect(() => {
    document.title = 'Welcome';
    getLocalStorage();
  });

  const dispatch = useDispatch();

  const getLocalStorage = () => {
    let tempBlogArr = [];

    //Retrieve any previously created blogs from LocalStorage
    const blogs = JSON.parse(localStorage.getItem('blog'));
    blogs ? blogs.map(blog => tempBlogArr.push(blog)) : tempBlogArr.push();
    dispatch(addAction(tempBlogArr));
  };

  return (
    <>
      <Header />
      <section className="welcome">
        <h1>Welcome to your Blogs</h1>
      </section>
      <Footer />
    </>
  );
};
