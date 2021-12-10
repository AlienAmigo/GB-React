import React from 'react';
import { NavLink } from 'react-router-dom';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import StyledChatItem from './style';

interface IProps {
  id?: string | number;
}

// TODO: сделать Активный чат
const ChatItem: React.FC<IProps> = ({ children, ...props }) => (
  <StyledChatItem>
    <NavLink to={`/chats/${props.id}`} activeClassName="active">
      <ChatBubbleIcon />
      {children}
    </NavLink>
  </StyledChatItem>
);

ChatItem.defaultProps = {
  id: 0
};

export default ChatItem;
