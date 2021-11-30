import React from 'react';
import Message from 'components/Message';
import './style.scss';
import { IMessage } from 'types';

const MessageList = (props: any) =>
  <div className="message-list">
    {
      props.messageList &&
      props.messageList.map((item: IMessage, index: number) =>
        <Message key={index} message={item} />
      )
    }
  </div>

export default MessageList;
