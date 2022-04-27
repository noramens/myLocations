import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NavAction, FooterBar } from './Styles';

export default function Footer() {
  const navigate = useNavigate();

  function navigateToCategories() {
    navigate('/categories');
  }

  function navigateToLocations() {
    navigate('locations');
  }

  return (
    <FooterBar>
      <NavAction onClick={navigateToCategories}>Categories</NavAction>
      <NavAction onClick={navigateToLocations}>Locations</NavAction>
    </FooterBar>
  );
}
