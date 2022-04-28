import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { NavAction, FooterBar } from './Styles';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const categoriesIsActive = location.pathname.includes('categories');
  const locationsIsActive = location.pathname.includes('locations');

  function navigateToCategories() {
    navigate('/categories');
  }

  function navigateToLocations() {
    navigate('locations');
  }

  return (
    <FooterBar>
      <NavAction onClick={navigateToCategories} isActive={categoriesIsActive}>
        Categories
      </NavAction>
      <NavAction onClick={navigateToLocations} isActive={locationsIsActive}>
        Locations
      </NavAction>
    </FooterBar>
  );
}
