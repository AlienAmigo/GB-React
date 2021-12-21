import ListItem from '@mui/material/ListItem';
import { styled, css } from '@mui/material/styles';

const StyledListItem = styled(ListItem)<{ isRobot?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 0;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background: linear-gradient(-35deg, #8378dd, #4a419b);
  color: #fff;

  & * {
    font-size: 10px;
  }

  .message {
    &__title {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 600;
    }

    &__text {
      align-self: flex-start;
      text-align: left;
      margin-bottom: 5px;
      font-size: 13px;
    }

    &__author {
      align-self: flex-end;
      margin-top: 10px;
      color: #cacaca;
      font-size: 12px;
    }

    &__date {
      align-self: flex-end;
      font-size: 12px;
      color: #cacaca;
    }
  }

  ${({ isRobot }) =>
    isRobot &&
    css`
      align-self: flex-end;
      margin-top: -5px;
      padding: 0 10px;
      background: rgba(255, 255, 255, 0);
      border: none;

      & .message {
        &__text {
          font-weight: 600;
          text-align: right;
          font-size: 10px;
          color: #aaa;
        }
      }
    `}
`;

export default StyledListItem;
