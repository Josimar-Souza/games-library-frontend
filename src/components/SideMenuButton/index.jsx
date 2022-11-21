import React from 'react';
import {
  SideMenuStyle,
  SideMenuBarContainer,
  SideMenuBar,
  SideMenuContainer,
} from './sideMenuButtonStyles';

function SideMenuButton() {
  return (
    <SideMenuContainer>
      <SideMenuBarContainer htmlFor="side-bar">
        <SideMenuBar />
        <SideMenuBar />
        <SideMenuBar />
      </SideMenuBarContainer>
      <SideMenuStyle
        type="checkbox"
        id="side-bar"
      />
    </SideMenuContainer>
  );
}

export default SideMenuButton;
