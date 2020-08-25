import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ListBook from './pages/Books/Index/ListBooks';
import UpdateBook from './pages/Books/Update/UpdateBook';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/books" exact component={ListBook} />
        <Route path="/book/:id" component={UpdateBook} />

      </Switch>
    </BrowserRouter>
  );
}