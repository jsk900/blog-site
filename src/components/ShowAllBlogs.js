import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../css/showBlogs.css';

export const ShowAllBlogs = props => {
  const {
    uuid,
    userName = 'There are no blogs to show!',
    title,
    content,
    today,
    handleDelete
  } = props;

  useEffect(() => {
    document.title = 'Show all Blogs';
  });

  return (
    <div className="card-container">
      <p className="blogs-p">
        <span>User</span> {userName}
      </p>
      <Link
        to={{
          pathname: `/ShowBlog/${uuid}`,
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
        <button className="delete-btn" onClick={handleDelete.bind(this, uuid)}>
          Delete
        </button>
      ) : null}
    </div>
  );
};
