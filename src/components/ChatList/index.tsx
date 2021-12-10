import React from 'react';
import { nanoid } from 'nanoid';
import ChatItem from 'components/ChatItem';
import StyledList from './style';
import ChartListMock from './mock';

const ChatList = () => {
  return (
    <StyledList>
      {ChartListMock.map(item => (
        <ChatItem id={item.id.toString()} key={nanoid()} isActive={!item.id}>
          {item.name}
        </ChatItem>
      ))}
    </StyledList>
  );
};

export default ChatList;
