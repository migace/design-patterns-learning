import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { PostsList } from 'scenes/PostsList';
import { UsersList } from 'scenes/UsersList';
import { PostDetails } from 'scenes/PostDetails';

const App = () => (
  <Router>
    <div className="App">
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Singleton
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item">
              Home
            </Link>            
            <Link to="/users" className="navbar-item">
              Users
            </Link>
          </div>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <Switch>
            <Route path="/users" component={UsersList} />
            <Route path="/posts/:id" component={PostDetails} />
            <Route path="/">
              <PostsList />
            </Route>
          </Switch>
        </div>
      </section>
    </div>
  </Router>
);

export default App;
