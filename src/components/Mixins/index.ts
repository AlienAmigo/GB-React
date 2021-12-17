import { styled, css } from '@mui/material/styles';

const MIXINS = {
  SCROLLBARS: css`
    // Mozilla
    scrollbar-color: rgba(0, 0, 0, 0.4) #d1d1d1;
    scrollbar-width: thin;
    // Webkit
    /* stylelint-disable-next-line */
    &::-webkit-scrollbar {
      width: 7px;
      background-color: #ccc;
      border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #999999;
      border-radius: 3px;
    }
  `
};

export default MIXINS;
