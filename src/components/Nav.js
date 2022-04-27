import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NavBar, NavTitle, NavAction } from './Styles';

export default function Nav() {
  const navigate = useNavigate();

  function navigateToAddCategory() {
    navigate('/add-category');
  }

  function navigateToHome() {
    navigate('/');
  }

  function navigateToLoAddLocation() {
    navigate('/add-location');
  }

  return (
    <NavBar>
      <NavTitle onClick={navigateToHome}>myLocations</NavTitle>
      <menu>
        <NavAction onClick={navigateToAddCategory}>Add Category</NavAction>
        <NavAction onClick={navigateToLoAddLocation}>Add Location</NavAction>
      </menu>
    </NavBar>
  );
}
