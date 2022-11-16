import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import Logo from '../../images/Logo.jpg';
import {
  HeaderContainer,
  HeaderLogo,
} from './headerStyles';

function Header(props) {
  const {
    headerFontColor,
    headerTitle,
  } = props;

  return (
    <HeaderContainer>
      <HeaderLogo src={Logo} alt="Logo da página no header" />
      <Title
        fontColor={headerFontColor}
        textAlign="center"
      >
        {headerTitle}
      </Title>
    </HeaderContainer>
  );
}

Header.defaultProps = {
  headerFontColor: 'black',
};

Header.propTypes = {
  headerFontColor: PropTypes.string,
  headerTitle: PropTypes.node.isRequired,
};

export default Header;
