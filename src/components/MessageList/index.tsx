import React from 'react';
import Message from 'components/Message';
import { List } from '@mui/material';
import './style.scss';
import { IMessage, IMessageList } from 'types';
import { nanoid } from 'nanoid';

const MessageList = ({ messageList }: IMessageList) => {
  return (
    <div className="message-list">
      {messageList &&
        messageList.map((item: IMessage) => <Message key={nanoid()} message={item} />)}
    </div>
  );
};

export default MessageList;
