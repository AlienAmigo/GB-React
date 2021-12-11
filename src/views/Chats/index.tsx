import React, { useState, useCallback, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Messages from 'components/Messages';
import ChartList from 'components/ChatList';
import { IMessage, IMessageList } from 'types';
import ChartListMock from 'components/ChatList/mock';
import { ROUTERS } from 'router';
import StyledChats from './style';

interface IProps {
  messageList: IMessageList;
}

const Chats: React.FC<IProps> = () => {
  const [messageList, setMessageList] = useState([]);

  const robotMessage =
    'Да\u00A0здравствуют роботы! Устроим свой Диснейленд с\u00A0Майнкрафтом и\u00A0роботессами!';

  const addMessage = useCallback(
    (message: IMessage) => setMessageList(state => [...state, message as never]),
    []
  );

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    const timerId = setTimeout(() => {
      if (
        (lastMessage as IMessage)?.isAuthorHuman === false &&
        (lastMessage as IMessage)?.isRobot !== true
      ) {
        addMessage({
          text: robotMessage,
          isRobot: true,
          isAuthorHuman: false
        } as never);
      }
    }, 1500);

    return () => {
      clearTimeout(timerId);
    };
  }, [messageList, addMessage]);

  return (
    <StyledChats>
      <ChartList list={ChartListMock} />
      <Switch>
        <Route path={`${ROUTERS.CHATS}/:chartId`}>
          <Messages messageList={messageList as never} addMessage={addMessage} />
        </Route>
      </Switch>
    </StyledChats>
  );
};

export default Chats;
