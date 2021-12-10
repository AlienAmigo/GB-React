import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledNavigationItem from './style';

interface IProps {
  title: string;
  link: string;
}

const NavigationItem = ({ title, link }: IProps) => {
  return (
    <StyledNavigationItem>
      <NavLink to={link} activeClassName="active">
        {title}
      </NavLink>
    </StyledNavigationItem>
  );
};

export default NavigationItem;
