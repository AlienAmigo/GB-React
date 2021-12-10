import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import { MenuItems } from 'router';

const Home = () => {
  return (
    <>
      <h1>Главная</h1>
      <List>
        {MenuItems.map(item => (
          <ListItem>
            <Link to={item.link}>{item.title}</Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Home;
