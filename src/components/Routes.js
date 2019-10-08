import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Welcome } from './Welcome';
import { CreateBlog } from './CreateBlog';
import { Mapping } from './Mapping';
import { ShowBlog } from './ShowBlog';
import { NotFound } from './NotFound';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Welcome} exact />
      <Route path="/CreateBlog" component={CreateBlog} />
      <Route path="/Mapping" component={Mapping} />
      <Route path="/ShowBlog/:id" component={ShowBlog} />
      <Route component={NotFound} exact />
    </Switch>
  </BrowserRouter>
);
