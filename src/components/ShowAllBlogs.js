//React imports
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Local imports
import { redirectAction, addAction } from '../actions';
import { Header } from './Header';
import { Footer } from './Footer';
import { ShowBlog } from './ShowBlog';
import '../css/showBlogs.css';

export const ShowAllBlogs = () => {
  //Get blogs from store
  const blogs = useSelector(state => state.addReducer);

  //Initialize dispatcher
  const dispatch = useDispatch();

  //Initialize page title and get blogs from LocalStorage
  useEffect(() => {
    document.title = 'Welcome';

    let tempBlogArr = [];

    //Retrieve any previously created blogs from LocalStorage
    const blogs = JSON.parse(localStorage.getItem('blog'));
    blogs ? blogs.map(blog => tempBlogArr.push(blog)) : tempBlogArr.push();
    dispatch(addAction(tempBlogArr));
  }, [dispatch]);

  //Reset redirect flag
  dispatch(redirectAction(false));

  //Get individual blogs
  const blog = blogs.map(blog => <ShowBlog blog={blog} key={blog.uuid} />);

  //Conditionally render the blogs or not
  if (blogs.length > 0) {
    return (
      <>
        <Header />
        <div className="blogs">{blog}</div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div className="no-show">There are no blogs to show</div>
        <Footer />
      </>
    );
  }
};
