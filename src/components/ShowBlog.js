//React imports
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; //Here I'm using link as I don't care about an active colour

//Local imports
import { addAction } from '../actions';
import '../css/showBlog.css';

export const ShowBlog = props => {
  //Initialize the dispatcher
  const dispatch = useDispatch();

  //Destructuring the props
  const { uuid, userName, title, content, today } = props.blog;

  //Delete blog function
  //First we retrieve all the blogs from local storage
  //We filter out the blog to be deleted
  //If there are any blogs left we replace the newly filtered array into LocalStorage
  //If there are no blogs left after the delete we clear LocalStorage
  //We then add to the store
  const handleDelete = () => {
    const blogs = JSON.parse(localStorage.getItem('blog'));
    const newBlogs = blogs.filter(blog => blog.uuid !== uuid);
    newBlogs.length > 0
      ? localStorage.setItem('blog', JSON.stringify(newBlogs))
      : localStorage.clear();
    dispatch(addAction(newBlogs));
  };

  return (
    <div className="card-container">
      <p className="blogs-p">
        <span>User</span> {userName}
      </p>
      {/* Link to details page */}
      <Link
        to={{
          pathname: `/ShowDetail/${uuid}`,
          state: {
            userName: userName,
            title: title,
            content: content,
            today: today
          }
        }}
      >
        <p className="blogs-p">
          <span>Title</span> {title}
        </p>
      </Link>
      <p className="blogs-p">{today}</p>

      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
