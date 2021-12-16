import { IMessageItem } from 'types';

export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const REMOVE_MESSAGE_BY_CHAT_ID = 'REMOVE_MESSAGE_BY_CHAT_ID';

export const createMessage = ({ message }: IMessageItem, chatId: number | string) => ({
  type: CREATE_MESSAGE,
  payload: {
    message,
    chatId
  }
});

export const removeMessagesByChatId = (chatId: number) => ({
  type: REMOVE_MESSAGE_BY_CHAT_ID,
  payload: chatId
});
