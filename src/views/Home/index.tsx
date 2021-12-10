import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import { MenuItems } from 'router';
import { nanoid } from 'nanoid';

const Home = () => {
  return (
    <>
      <h1>Главная</h1>
      <List>
        {MenuItems.map(item => (
          <ListItem key={nanoid()}>
            <Link to={item.link}>{item.title}</Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Home;
