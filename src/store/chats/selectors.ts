import { compareById } from 'helpers';

export const getChats = (state: any) => state.chats;
export const getChatList = (state: any) => getChats(state).chats;
export const getChatsById = (chatId: number | string) => (state: any) =>
  getChatList(state).filter(compareById(chatId));
export const hasChatsById = (chatId: number | string) => (state: any) =>
  getChatList(state).findIndex(compareById(chatId));
