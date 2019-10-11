import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/header.css';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={{ color: '#f78b10' }}>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to="/CreateBlog" activeStyle={{ color: '#f78b10' }}>
              Create a Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/ShowAllBlogs" activeStyle={{ color: '#f78b10' }}>
              Show all Blogs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
