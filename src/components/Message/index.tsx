import './style.scss';

interface IProps {
  message: {
    title?: string,
    text: string,
    date?: string,
    author?: string,
  }
}

const Message = (props: IProps) => {
  return <div className="message">
    {props.message.title && <div className="message__title">{props.message.title}</div>}
    <div className="message__text">{props.message.text}</div>
    <div className="message__author">{props.message.author || 'Неизвестный автор'}</div>
    {props.message.date && <div className="message__date">{props.message.date}</div>}
  </div>
}

export default Message;
