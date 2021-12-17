import { List, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import COLORS from 'components/Style';
import MIXINS from 'components/Mixins';

export const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 300px;
  height: 100%;
  max-height: 100%;
  background-color: #252525;
  margin: 10px;
  padding: 7px;
  border-radius: 4px;
  overflow: auto;
  ${MIXINS.SCROLLBARS}
`;

export const StyledDelChatButton = styled(Button)`
  display: flex;
  align-self: center;
  justify-content: center;
  width: max-content;
  min-width: max-content;
  margin: 0 0 0 auto;
  padding: 0;

  &:hover {
    opacity: 1;
  }
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
  color: #fff;

  &:hover {
    color: ${COLORS.MAIN};
  }

  svg {
    margin: 0;
  }
`;
