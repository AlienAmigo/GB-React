import { styled, css } from '@mui/material/styles';
import { Box } from '@mui/material';

export const AppBox = styled(Box)`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-color: #191919;
`;

export const MessageBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100vh;
  margin: 0;
`;
