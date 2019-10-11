import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Welcome } from './Welcome';
import { CreateBlog } from './CreateBlog';
import { ShowAllBlogs } from './ShowAllBlogs';
import { ShowDetail } from './ShowDetail';
import { NotFound } from './NotFound';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Welcome} exact />
      <Route path="/CreateBlog" component={CreateBlog} />
      <Route path="/ShowAllBlogs" component={ShowAllBlogs} />
      <Route path="/ShowDetail/:id" component={ShowDetail} />
      <Route component={NotFound} exact />
    </Switch>
  </BrowserRouter>
);
