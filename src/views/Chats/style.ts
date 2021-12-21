import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import COLORS from 'components/Style';

export const StyledChats = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  max-height: calc(100vh - 69px);
  background-color: #191919;
  overflow: auto;
`;

export const StyledNewChatButton = styled(Button)`
  display: flex;
  margin: 0 10px 5px;
  color: ${COLORS.MAIN};
  cursor: pointer;
`;

export const StyledChatListWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
