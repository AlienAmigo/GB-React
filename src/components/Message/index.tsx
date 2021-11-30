import './style.scss';
import { IMessage } from 'types';

interface IProps {
  message: IMessage
}

const Message = (props: IProps) => {

  return <div className={`message ${props.message.isAnswer ? 'message--robot': ''}`}>
    {props.message.title && <div className="message__title">{props.message.title}</div>}
    <div className="message__text">{props.message.text}</div>
    {!props.message.isAnswer && <div className="message__author">{props.message.isAuthorHuman ? 'Неизвестный автор' : 'Сообщение от бота'}</div>}
    {props.message.date && !props.message.isAnswer && <div className="message__date">{props.message.date}</div>}
  </div>
}

export default Message;
