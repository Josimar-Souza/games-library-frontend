import React from 'react';
import PropTypes from 'prop-types';
import {
  SideMenuStyle,
  SideMenuBarContainer,
  SideMenuBar,
  SideMenuContainer,
} from './sideMenuButtonStyles';

function SideMenuButton({ onChange, name }) {
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
        onChange={onChange}
        name={name}
        data-testid="side-menu-button"
      />
    </SideMenuContainer>
  );
}

SideMenuButton.defaultProps = {
  name: '',
};

SideMenuButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default SideMenuButton;
