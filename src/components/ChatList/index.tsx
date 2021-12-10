import React from 'react';
import { nanoid } from 'nanoid';
import ChatItem from 'components/ChatItem';
import StyledList from './style';
import ChartListMock from './mock';

interface IProps {
  list: {
    id: number;
    name: string;
  }[];
}

const ChatList = function ({ list }: IProps) {
  return (
    <StyledList>
      {list.map(item => (
        <ChatItem id={item.id.toString()} key={nanoid()}>
          {item.name}
        </ChatItem>
      ))}
    </StyledList>
  );
};

export default ChatList;
