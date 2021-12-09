import React from 'react';
import { Link } from 'react-router-dom';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import StyledChatItem from './style';

interface IProps {
  id?: string | number;
  key?: string | number;
  isActive?: boolean;
}

// TODO: сделать Активный чат
const ChatItem: React.FC<IProps> = ({ children, ...props }) => (
  <StyledChatItem isActive={props.isActive}>
    <Link to={`/chats/${props.id}`}>
      {!props.isActive ? <ChatBubbleIcon /> : <ChatBubbleOutlineIcon />}
      {children}
    </Link>
  </StyledChatItem>
);

ChatItem.defaultProps = {
  id: 0,
  key: 0,
  isActive: false
};

export default ChatItem;
