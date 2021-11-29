import React from 'react';
import Message from '../Message';
import './style.scss';

const MessageList = (props: any) =>
  <div className="message-list">
    {
      props.messageList &&
      props.messageList.map((item: any, index: number) =>
        <Message key={index} message={item} />
      )
    }
  </div>

export default MessageList;
