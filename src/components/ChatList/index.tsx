import React from 'react';
import { nanoid } from 'nanoid';
import ChatItem from 'components/ChatItem';
import StyledList from './style';

interface IProps {
  onDelete: () => void;
  list: {
    id: number;
    name: string;
  }[];
}

const ChatList = ({ list, onDelete }: IProps) => {
  return (
    <StyledList>
      {list.map(item => (
        <ChatItem id={item.id.toString()} key={nanoid()}>
          {item.name}
          <button type="button" onClick={onDelete}>
            x
          </button>
        </ChatItem>
      ))}
    </StyledList>
  );
};

export default ChatList;
