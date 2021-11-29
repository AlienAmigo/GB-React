import { useState, useCallback, useEffect } from 'react';
import './App.scss';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';

const App = () => {

  interface IMessage {
    title?: string,
    text: string,
    date?: string,
    author?: string,
    isAuthorHuman?: boolean,
    isAnswer?: boolean,
  }

  const [messageList, setMessageList] = useState([]);

  const robotMessage = "Да\u00A0здравствуют роботы! Устроим свой Диснейленд с\u00A0Майнкрафтом и\u00A0роботессами!";

  useEffect(() => {
    const timerId = setTimeout(() => {
      ((messageList[messageList.length - 1] as IMessage)?.isAuthorHuman === false && (messageList[messageList.length - 1] as IMessage)?.isAnswer !== true) &&
        addMessage({
          text: robotMessage,
          isAnswer: true,
          isAuthorHuman: false,
        });
    }, 1500);

    return () => {
     clearTimeout(timerId);
    }

  }, [messageList])

  const addMessage = useCallback((message: IMessage) => {
    setMessageList((state) => {
      const copyState = [...state];
      copyState.push(message as never);
      return copyState;
    });
  }, []);

  return (
    <div className="App">
      <div className="messager-wrapper">
        <MessageList messageList={messageList} />
        <MessageForm addMessage={addMessage} />
      </div>
    </div>
  );
}

export default App;
