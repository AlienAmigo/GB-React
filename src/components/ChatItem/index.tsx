import React from 'react';
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
    {!props.isActive ? <ChatBubbleIcon /> : <ChatBubbleOutlineIcon />} {children}
  </StyledChatItem>
);

ChatItem.defaultProps = {
  id: 0,
  key: 0,
  isActive: false
};

export default ChatItem;
