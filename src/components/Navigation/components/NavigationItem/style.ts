import { styled } from '@mui/material/styles';
import { ListItem } from '@mui/material';

const StyledNavigationItem = styled(ListItem)`
  display: inline-flex;
  width: max-content;
  color: #fff;

  & a {
    color: #fff;
    text-decoration: none;

    &.active {
      color: #676767;
    }

    &:visited {
      color: #fff;
    }
  }
`;
export default StyledNavigationItem;
