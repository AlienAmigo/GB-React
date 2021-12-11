import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppBox, ContentBox } from 'components/AppWrapper/style';
import Profile from 'views/Profile';
import Chats from 'views/Chats';
import Home from 'views/Home';
import Navigation from 'components/Navigation';
import { ROUTERS } from 'router';
import NotMatch from 'views/NotMatch';
import { store } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppBox>
          <Navigation />
          <ContentBox>
            <Switch>
              <Route component={Profile} path={ROUTERS.PROFILE} />
              <Route component={Chats} path={ROUTERS.CHATS} />
              <Route component={Home} exact path={ROUTERS.BASE} />
              <Route component={NotMatch} path="*" />
            </Switch>
          </ContentBox>
        </AppBox>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
