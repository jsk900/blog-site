import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeAction } from '../actions';

import '../css/showBlog.css';

export const ShowBlog = props => {
  const blogs = useSelector(state => state.addReducer);
  const dispatch = useDispatch();

  const {
    uuid,
    userName = 'There are no blogs to show!',
    title,
    content,
    today
  } = props.blog;

  const handleDelete = () => {
    dispatch(removeAction(uuid));
    localStorage.clear();
    localStorage.setItem('blog', JSON.stringify(blogs));
  };

  return (
    <div className="card-container">
      <p className="blogs-p">
        <span>User</span> {userName}
      </p>
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
      {userName !== 'There are no blogs to show!' ? (
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      ) : null}
    </div>
  );
};
