import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const AppBox = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  min-height: 100vh;
`;

export const ContentBox = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MessagesBox = styled(Box)`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  width: 400px;
  margin: 0;
`;
