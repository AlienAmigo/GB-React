import React, { useState, useCallback, useEffect } from 'react';
import MessageForm from 'components/MessageForm';
import MessageList from 'components/MessageList';
import ChartList from 'components/ChatList';
import { AppBox, MessageBox } from 'components/AppWrapper/style';
import { IMessage } from 'types';

const App = () => {
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
    <AppBox>
      <ChartList />
      <MessageBox>
        <MessageList messageList={messageList as never} />
        <MessageForm addMessage={addMessage as any} />
      </MessageBox>
    </AppBox>
  );
};

export default App;
