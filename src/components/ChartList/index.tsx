import React from 'react';
import { nanoid } from 'nanoid';
import { List, ListItem } from '@mui/material';
import ChartListMock from './mock';

const ChartList = () => {
  return (
    <List>
      {ChartListMock.map((item) => (
        <ListItem id={item.id.toString()} key={nanoid()}>
          {item.name}
        </ListItem>
      ))}
    </List>
  );
};

export default ChartList;
