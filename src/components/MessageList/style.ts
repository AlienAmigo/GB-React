import { List } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1;
  width: 100%;
  margin: 10px 0 0;
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: auto;
  // Mozilla
  scrollbar-color: rgba(0, 0, 0, 0.4) #D1D1D1;
  scrollbar-width: thin;
  // Webkit
  /* stylelint-disable-next-line */
  &::-webkit-scrollbar {
    width: 7px;
    height: 5px;
    background-color: #ccc;
    border-radius: 3px;
`;

export default StyledList;
