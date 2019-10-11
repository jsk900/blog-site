import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Header } from './Header';
import { Footer } from './Footer';
import { ShowBlog } from './ShowBlog';

import '../css/showBlogs.css';

export const ShowAllBlogs = () => {
  const blogs = useSelector(state => state.addReducer);
  useEffect(() => {
    document.title = 'Show all Blogs';
  });

  const blog = blogs.map(blog => <ShowBlog blog={blog} key={blog.uuid} />);
  return (
    <>
      <Header />
      {blog}
      <Footer />
    </>
  );
};
