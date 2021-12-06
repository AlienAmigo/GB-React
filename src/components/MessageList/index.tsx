import React from 'react';
import Message from 'components/Message';
import { IMessage, IMessageList } from 'types';
import { nanoid } from 'nanoid';
import StyledList from './style';

const MessageList = ({ messageList }: IMessageList) => {
  return (
    <StyledList className="message-list">
      {messageList &&
        messageList.map((item: IMessage) => <Message key={nanoid()} message={item} />)}
    </StyledList>
  );
};

export default MessageList;
