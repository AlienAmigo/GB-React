export interface IMessage {
  title?: string;
  text: string;
  date?: string;
  author?: string;
  isAuthorHuman?: boolean;
  isAnswer?: boolean;
}

export interface IMessageList {
  messageList: [IMessage];
  addMessage?: (message: IMessage) => void;
}
