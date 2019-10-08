import React, { useState } from 'react';
import { ShowAllBlogs } from './ShowAllBlogs';
import { Header } from './Header';
import { Footer } from './Footer';

import '../css/showBlogs.css';

let Blogs;

export const Mapping = () => {
  const [remove, setRemove] = useState(false);

  let tempArr = JSON.parse(localStorage.getItem('blog'));

  const handleDelete = uuid => {
    const newTempArr = tempArr.filter(blog => uuid !== blog.uuid);
    localStorage.clear();
    localStorage.setItem('blog', JSON.stringify(newTempArr));
    newTempArr.length === 0
      ? localStorage.clear()
      : localStorage.getItem('blog');
    setRemove(() => !remove);
  };

  if (localStorage.getItem('blog')) {
    Blogs = JSON.parse(localStorage.getItem('blog')).map(blog => (
      <ShowAllBlogs
        key={blog.uuid}
        uuid={blog.uuid}
        userName={blog.userName}
        title={blog.title}
        content={blog.content}
        today={blog.today}
        handleDelete={handleDelete}
      />
    ));
  } else {
    Blogs = (
      <ShowAllBlogs
        key="1"
        handleDelete=""
        uuid="1"
        userName="There are no blogs to show!"
        title=""
        content=""
        today=""
      />
    );
  }

  return (
    <>
      <Header />
      <section className="blogs">{Blogs}</section>
      <Footer />
    </>
  );
};
