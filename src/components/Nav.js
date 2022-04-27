import React from 'react';
import { NavBar, NavTitle, NavAction } from './Styles';

export default function Nav() {
  return (
    <NavBar>
      <NavTitle>myLocations</NavTitle>
      <menu>
        <NavAction>Add Category</NavAction>
        <NavAction>Add Location</NavAction>
      </menu>
    </NavBar>
  );
}
