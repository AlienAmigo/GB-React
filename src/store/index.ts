import { createStore, combineReducers } from 'redux';
import { profileReducer } from './profile/reducer';
import { messagesReducer } from './messages/reducer';
import { chatsReducer } from './chats/reducer';

const myReducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  chats: chatsReducer
});

export const store = createStore(
  myReducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
