import React, { useCallback, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Messages from 'components/Messages';
import ChartList from 'components/ChatList';
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

  return (
    <StyledChats>
      <StyledChatListWrapper>
        <ChartList list={chats} onDelete={onDelete as () => void} />
        <StyledNewChatButton onClick={onCreate}>Создать чат</StyledNewChatButton>
      </StyledChatListWrapper>
      <Switch>
        <Route path={`${ROUTERS.CHATS}/:chatId`}>
          <Messages />
        </Route>
      </Switch>
    </StyledChats>
  );
};

export default Chats;
