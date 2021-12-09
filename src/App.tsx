import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { AppBox, ContentBox } from 'components/AppWrapper/style';
import Profile from 'views/Profile';
import Chats from 'views/Chats';
import Home from 'views/Home';
import Navigation from 'components/Navigation';
import { ROUTERS } from 'router';
import NotMatch from 'views/NotMatch';

const App = () => {
  return (
    <BrowserRouter>
      <AppBox>
        <Navigation />
        <ContentBox>
          <Switch>
            <Route component={Profile} path={ROUTERS.PROFILE} />
            <Route component={Chats} path={ROUTERS.CHARTS} />
            <Route path={`${ROUTERS.CHARTS}/:chatId`} children={<Chats />} />
            <Route component={Home} exact path={ROUTERS.BASE} />
            <Route component={NotMatch} path="*" />
          </Switch>
        </ContentBox>
      </AppBox>
    </BrowserRouter>
  );
};

export default App;
