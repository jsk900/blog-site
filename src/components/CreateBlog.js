//React, Redux, Third party imports
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import uuid from 'uuid/v4';

//Local imports
import { addAction, redirectAction } from '../actions';
import { Header } from './Header';
import { Footer } from './Footer';
import '../css/createBlog.css';

//Create blog hook component
export const CreateBlog = () => {
  //Get redirect flag from store
  const redirect = useSelector(state => state.redirectReducer);
  //Get blogs array from store
  const blogs = useSelector(state => state.addReducer);
  //Initialize dispatcher
  const dispatch = useDispatch();

  //Input field refs
  const refUserName = useRef();
  const refTitle = useRef();
  const refContent = useRef();

  //Component mounted, create page title
  useEffect(() => {
    document.title = 'Create Blog';
  }, []);

  //Form submitted. Set redirect flag. Create blog object.
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(redirectAction(true));
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

    //Retrieve any previously created blogs from the Store.
    blogs ? blogs.map(blog => tempBlogArr.push(blog)) : tempBlogArr.push();

    //Add new blog to LocalStorage and update the store
    tempBlogArr.push(blog);
    localStorage.setItem('blog', JSON.stringify(tempBlogArr));
    dispatch(addAction(tempBlogArr));
  };

  //If our state redirect flag is true redirect to showAllBlogs, else show the createBlog form.
  if (redirect) {
    return <Redirect to="/ShowAllBlogs" />;
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
