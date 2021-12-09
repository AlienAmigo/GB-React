import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { MenuItems } from 'router';
import { nanoid } from 'nanoid';
import NavigationItem from './components/NavigationItem';

const Navigation = () => {
  return (
    <AppBar position="sticky" className="navigation__app-bar">
      <Container maxWidth="xl">
        <Toolbar className="navigation__toolbar">
          <nav>
            <ul>
              {MenuItems.map((item, index) => (
                <NavigationItem key={nanoid()} title={item.title} link={item.link} />
              ))}
            </ul>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
