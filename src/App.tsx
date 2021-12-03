import { useState, useCallback, useEffect } from 'react';
import './App.scss';
import MessageForm from 'components/MessageForm';
import MessageList from 'components/MessageList';
import { IMessage } from 'types';

const App = () => {
  const [messageList, setMessageList] = useState([]);

  const robotMessage =
    'Да\u00A0здравствуют роботы! Устроим свой Диснейленд с\u00A0Майнкрафтом и\u00A0роботессами!';

  const addMessage = useCallback(
    (message: IMessage) => setMessageList((state) => [...state, message as never]),
    []
  );

  useEffect(() => {
    let lastMessage = messageList[messageList.length - 1];
    const timerId = setTimeout(() => {
      (lastMessage as IMessage)?.isAuthorHuman === false &&
        (lastMessage as IMessage)?.isAnswer !== true &&
        addMessage({
          text: robotMessage,
          isAnswer: true,
          isAuthorHuman: false
        });
    }, 1500);

    return () => {
      clearTimeout(timerId);
    };
  }, [messageList, addMessage]);

  return (
    <div className="App">
      <div className="messager-wrapper">
        <MessageList messageList={messageList as never} />
        <MessageForm addMessage={addMessage} />
      </div>
    </div>
  );
};

export default App;
