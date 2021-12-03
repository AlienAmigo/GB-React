import React from 'react';
import Message from 'components/Message';
import './style.scss';
import { IMessage } from 'types';
import { IMessageList } from 'types';
import { nanoid } from 'nanoid';

const MessageList = (props: IMessageList) => (
  <div className="message-list">
    {props.messageList &&
      props.messageList.map((item: IMessage) => <Message key={nanoid()} message={item} />)}
  </div>
);

export default MessageList;
