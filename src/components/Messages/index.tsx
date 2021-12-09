import React from 'react';
import { MessagesBox } from 'components/AppWrapper/style';
import MessageList from 'components/MessageList';
import MessageForm from 'components/MessageForm';
import { IMessageList, IAddMessageFunc } from 'types';
import { useParams } from 'react-router-dom';

const Messages = ({ messageList, addMessageFunc }: IMessageList & IAddMessageFunc) => {
  return (
    <MessagesBox>
      <MessageList messageList={messageList as never} />
      <MessageForm addMessageFunc={addMessageFunc} />
    </MessagesBox>
  );
};

export default Messages;
