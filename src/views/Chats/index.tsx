import React, { useState, useCallback, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Messages from 'components/Messages';
import ChartList from 'components/ChatList';
import { IMessage, IMessageList } from 'types';
import ChartListMock from 'components/ChatList/mock';
import { ROUTERS } from 'router';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getChatList } from 'store/chats/selectors';
import { createChat, removeChat, setChats } from 'store/chats/actions';
import { removeMessagesByChatId } from 'store/messages/actions';
import { StyledChats, StyledChatListWrapper, StyledNewChatButton } from './style';

const Chats = () => {
  const chats = useSelector(getChatList);
  const dispatch = useDispatch();

  const onCreate = useCallback(() => {
    dispatch(
      createChat({
        id: nanoid(),
        name: 'chatName'
      })
    );
  }, []);

  const onDelete = (chatId: string) => {
    dispatch(removeChat(chatId.toString()));
    dispatch(removeMessagesByChatId(chatId.toString()));
  };

  useEffect(() => {
    dispatch(setChats(ChartListMock));
  }, []);

  // const [messageList, setMessageList] = useState([]);

  // const robotMessage =
  //   'Да\u00A0здравствуют роботы! Устроим свой Диснейленд с\u00A0Майнкрафтом и\u00A0роботессами!';

  // const addMessage = useCallback(
  //   (message: IMessage) => setMessageList(state => [...state, message as never]),
  //   []
  // );

  // useEffect(() => {
  //   const lastMessage = messageList[messageList.length - 1];
  //   const timerId = setTimeout(() => {
  //     if (
  //       (lastMessage as IMessage)?.isAuthorHuman === false &&
  //       (lastMessage as IMessage)?.isRobot !== true
  //     ) {
  //       addMessage({
  //         text: robotMessage,
  //         isRobot: true,
  //         isAuthorHuman: false
  //       } as never);
  //     }
  //   }, 1500);

  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, [messageList, addMessage]);

  return (
    <StyledChats>
      <StyledChatListWrapper>
        <ChartList list={chats} onDelete={onDelete as () => void} />
        <StyledNewChatButton onClick={onCreate}>Создать чат</StyledNewChatButton>
      </StyledChatListWrapper>
      <Switch>
        <Route path={`${ROUTERS.CHATS}/:chartId`}>
          <Messages />
        </Route>
      </Switch>
    </StyledChats>
  );
};

export default Chats;
