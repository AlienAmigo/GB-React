import { CREATE_MESSAGE, REMOVE_MESSAGE_BY_CHAT_ID } from './actions';
import { REMOVE_CHAT } from 'store/chats/actions';
import { IMessage, IMessageList } from 'types/index';

const initialState = {
  messages: {},
}

export const messagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_MESSAGE: {
      const {
        message,
        chatId
      } = action.payload;

      const newMessages = {...state.messages as any};

      newMessages[chatId] = [
        ...(newMessages[chatId] || []),
        message,
      ]

      return {
        messages: newMessages
      }
    }

    case REMOVE_MESSAGE_BY_CHAT_ID: {
      if (!state.messages.hasOwnProperty(action.payload)) {
        return state;
      }

      const newMessages = {...state.messages as any};
      delete newMessages[action.payload];

      return {
        messages: newMessages
      }
    }

    default: {
      return state;
    }
  }
}
