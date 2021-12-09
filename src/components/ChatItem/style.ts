import { ListItem, styled, css } from '@mui/material';

const StyledChatItem = styled(ListItem)<{ isActive?: boolean }>`
  display: flex;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0);
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.25s ease-in;

  & a {
    display: flex;
    align-items: center;
    color: #ffffff;
    text-decoration: none;

    &:visited {
      color: #ffffff;
    }
  }

  &:hover {
    opacity: 0.75;
  }

  svg {
    opacity: 0.25;
    margin-right: 7px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #2b2c32;
      cursor: default;
      opacity: 1;

      &:hover {
        opacity: 1;
      }
    `}
`;

export default StyledChatItem;
