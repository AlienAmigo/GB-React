import React from 'react';
import { MessagesBox } from 'components/AppWrapper/style';
import MessageList from 'components/MessageList';
import MessageForm from 'components/MessageForm';
import { IMessageList, IAddMessage } from 'types';
import { useParams } from 'react-router-dom';

const Messages = ({ messageList, addMessage }: IMessageList & IAddMessage) => {
  return (
    <MessagesBox>
      <MessageList messageList={messageList as never} />
      <MessageForm addMessage={addMessage} />
    </MessagesBox>
  );
};

export default Messages;
