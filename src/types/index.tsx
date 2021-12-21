export interface IMessage {
  text?: string;
  author?: string;
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
