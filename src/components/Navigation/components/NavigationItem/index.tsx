import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import StyledNavigationItem from './style';

interface IProps {
  title: string;
  link: string;
}

const NavigationItem = ({ title, link }: IProps) => {
  return (
    <StyledNavigationItem className="navigation__item">
      <NavLink to={link} activeClassName="active">
        {title}
      </NavLink>
    </StyledNavigationItem>
  );
};

export default NavigationItem;
