export const CREATE_CHAT = 'CREATE_CHAT';
export const SET_CHATS = 'SET_CHATS';
export const REMOVE_CHAT = 'REMOVE_CHAT';

export const createChat = (chat: any) => ({
  type: CREATE_CHAT,
  payload: chat
});

export const setChats = (chats: any) => ({
  type: SET_CHATS,
  payload: chats
});

export const removeChat = (chatId: number | string) => ({
  type: REMOVE_CHAT,
  payload: chatId
});
