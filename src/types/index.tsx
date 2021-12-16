export interface IMessage {
  id?: number | string;
  title?: string;
  text?: string;
  date?: string;
  author?: string;
  isAuthorHuman?: boolean;
  isRobot?: boolean;
}

export interface IMessageList {
  messageList?: [IMessage];
}

export interface IAddMessage {
  addMessage: (message: IMessage) => void;
}

export interface IMessageItem {
  message: IMessage;
}
