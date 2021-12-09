import { List } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 300px;
  background-color: rgba(255, 255, 255, 0.05);
  margin: 10px;
  padding: 7px;
  border-radius: 4px;
`;

export default StyledList;
