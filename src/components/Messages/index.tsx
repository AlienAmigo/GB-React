import React from 'react';
import { MessagesBox } from 'components/AppWrapper/style';
import MessageList from 'components/MessageList';
import MessageForm from 'components/MessageForm';
import { IMessageList, IAddMessage } from 'types';
import { useParams, Redirect } from 'react-router-dom';
import { ROUTERS } from 'router';
import ChartListMock from 'components/ChatList/mock';

const Messages = ({ messageList, addMessage }: IMessageList & IAddMessage) => {
  const { chatId } = useParams<{ chatId: string }>();

  if (!ChartListMock.find(({ id }) => id.toString() === chatId)) {
    return <Redirect to={`${ROUTERS.CHATS}`} />;
  }

  return (
    <MessagesBox>
      <MessageList messageList={messageList as never} />
      <MessageForm addMessage={addMessage} />
    </MessagesBox>
  );
};

export default Messages;
