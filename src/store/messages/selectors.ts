export const getMessagesFromStore = (state: any) => state.messages || {};
export const getMessages = (state: any) => getMessagesFromStore(state).messges || {};
export const getChatMessagesById = (chatId: number | string) => (state: any) =>
  getMessages(state)[chatId];
