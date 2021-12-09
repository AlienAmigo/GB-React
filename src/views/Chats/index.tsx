import React, { useState, useCallback, useEffect } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import Messages from 'components/Messages';
import ChartList from 'components/ChatList';
import { IMessage, IAddMessageFunc } from 'types';
import ChartListMock from 'components/ChatList/mock';
import StyledChats from './style';

const Chats: React.FC = () => {
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
      <Messages addMessageFunc={addMessage} />;
      <Switch>
        {/* <Route>
          {({ addMessageFunc }: IAddMessageFunc) => {
          }}
        </Route> */}
      </Switch>
    </StyledChats>
  );
};

export default Chats;
