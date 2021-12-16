import { CREATE_CHAT, REMOVE_CHAT, SET_CHATS } from './actions';

const initialState = {
  chats: []
};

export const chatsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_CHAT: {
      return {
        chats: [...state.chats, action.payload]
      };
    }

    case SET_CHATS: {
      return {
        chats: [...action.payload]
      };
    }

    case REMOVE_CHAT: {
      return {
        chats: state.chats.filter(item => (item as any).id !== action.payload)
      };
    }

    default: {
      return state;
    }
  }
};
