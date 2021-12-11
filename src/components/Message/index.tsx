import React from 'react';
import { IMessage } from 'types';
import StyledListItem from './style';

interface IProps {
  message: IMessage;
}

const Message = ({ message }: IProps) => {
  return (
    <StyledListItem isRobot={message.isRobot}>
      {message.title && <div className="message__title">{message.title}</div>}
      <div className="message__text">{message.text}</div>
      {!message.isRobot && (
        <div className="message__author">
          {message.isAuthorHuman ? 'Неизвестный автор' : 'Сообщение от бота'}
        </div>
      )}
      {message.date && !message.isRobot && <div className="message__date">{message.date}</div>}
    </StyledListItem>
  );
};

export default Message;
