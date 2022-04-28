import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { NavBar, NavTitle, NavAction } from './Styles';

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const addCategoryIsActive = location?.pathname?.includes('add-category');
  const addLocationIsActive = location?.pathname?.includes('add-location');

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
        <NavAction
          onClick={navigateToAddCategory}
          isActive={addCategoryIsActive}
        >
          Add Category
        </NavAction>
        <NavAction
          onClick={navigateToLoAddLocation}
          isActive={addLocationIsActive}
        >
          Add Location
        </NavAction>
      </menu>
    </NavBar>
  );
}
