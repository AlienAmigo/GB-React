import React from 'react';
import { IMessage } from 'types';
import StyledListItem from './style';

interface IProps {
  message: IMessage;
}

const Message = ({ message }: IProps) => {
  return (
    <StyledListItem isRobot={message?.isRobot}>
      <div className="message__text">{message.text}</div>
      <div className="message__author">
        {!message?.isRobot ? 'Неизвестный автор' : 'Сообщение от бота'}
      </div>
    </StyledListItem>
  );
};

export default Message;
