import React from 'react';
import { nanoid } from 'nanoid';
import ChatItem from 'components/ChatItem';
import { StyledList, StyledDelChatButton, StyledDeleteIcon } from './style';

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
          <StyledDelChatButton type="button" onClick={onDelete}>
            <StyledDeleteIcon />
          </StyledDelChatButton>
        </ChatItem>
      ))}
    </StyledList>
  );
};

export default ChatList;
