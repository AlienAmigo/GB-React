import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledChats = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: #191919;
`;

export const StyledDeleteChatButton = styled(Button)`
  display: flex;
  cursor: pointer;
`;
