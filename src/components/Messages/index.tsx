import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { hasChatsById } from 'store/chats/selectors';
import { createMessage } from 'store/messages/actions';
import MessageList from 'components/MessageList';
import MessageForm from 'components/MessageForm';
import { IMessageList, IAddMessage } from 'types';
import { ROUTERS } from 'router';
import ChartListMock from 'components/ChatList/mock';
import { getChatMessagesById } from 'store/messages/selectors';
import { MessagesBox } from 'components/AppWrapper/style';

const Messages = () => {
  const { chatId } = useParams<{ chatId: string }>();

  const dispatch = useDispatch();
  const messageList = useSelector(getChatMessagesById(chatId));
  const hasChat = useSelector(hasChatsById(chatId));

  const sendMessage = (author?: string, text?: string) => {
    const newMessage: any = {
      author,
      text
    };
    dispatch(createMessage(newMessage, chatId));
  };

  const onSendMessage = (value: string) => {
    sendMessage('user', value);
  };

  useEffect(() => {
    if (!messageList || messageList.length === 0) {
      return;
    }

    const lastMessage = messageList[messageList.length - 1];
    if (lastMessage.author === 'robot' || !lastMessage.isAuthorHuman) {
      return;
    }

    sendMessage('robot', 'Hello from robots!');
  }, [messageList]);

  if (!hasChat) {
    return <Redirect to={`${ROUTERS.CHATS}`} />;
  }

  return (
    <MessagesBox>
      <MessageList messageList={messageList as never} />
      <MessageForm addMessage={onSendMessage as () => void} />
    </MessagesBox>
  );
};

export default Messages;
