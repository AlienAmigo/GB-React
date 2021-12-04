import React from 'react';
import { nanoid } from 'nanoid';
import ChartListMock from './mock';

const ChartList = () => {
  return (
    <div>
      {ChartListMock.map((item) => (
        <div id={item.id.toString()} key={nanoid()}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default ChartList;
