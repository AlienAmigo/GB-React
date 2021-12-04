import React from 'react';
import './style.scss';
import { IMessage } from 'types';
import ListItem from '@mui/material/ListItem';

interface IProps {
  message: IMessage;
}

const Message = ({ message }: IProps) => {
  return (
    <div className={`message ${message.isAnswer ? 'message--robot' : ''}`}>
      {message.title && <div className="message__title">{message.title}</div>}
      <div className="message__text">{message.text}</div>
      {!message.isAnswer && (
        <div className="message__author">
          {message.isAuthorHuman ? 'Неизвестный автор' : 'Сообщение от бота'}
        </div>
      )}
      {message.date && !message.isAnswer && <div className="message__date">{message.date}</div>}
    </div>
  );
};

export default Message;
