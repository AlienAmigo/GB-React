import { ListItem, styled } from '@mui/material';

const StyledChatItem = styled(ListItem)`
  display: flex;
  padding: 0;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0);
  font-size: 14px;
  color: #fff;
  cursor: pointer;

  & a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px 16px;
    color: #ffffff;
    text-decoration: none;
    opacity: 0.5;
    transition: opacity 0.25s ease-in;

    &:visited {
      color: #ffffff;
    }

    &.active {
      background-color: #2b2c32;
      cursor: default;
      opacity: 1;

      &:hover {
        opacity: 1;
      }
    }
  }

  &:hover {
    opacity: 0.75;
  }

  svg {
    opacity: 0.25;
    margin-right: 7px;
  }
`;

export default StyledChatItem;
