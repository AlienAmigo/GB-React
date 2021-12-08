import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Profile from 'views/Profile';
import Chats from 'views/Chats';
import Home from 'views/Home';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="">
            <Link to="/chats">Chats</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route component={Profile} path="/profile" />
        <Route component={Chats} path="/chats" />
        <Route component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
