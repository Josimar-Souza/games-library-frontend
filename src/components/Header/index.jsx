import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import Button from '../Button';
import Logo from '../../images/Logo.jpg';
import {
  HeaderContainer,
  HeaderLogo,
} from './headerStyles';

function Header(props) {
  const {
    headerFontColor,
    headerTitle,
    headerButtonText,
    onHeaderButtonClick,
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
      <Button
        width="8%"
        borderRadius="15px"
        fontSize="1.5vw"
        border="none"
        backgroundColor="red"
        fontColor="white"
        hoverCursor="pointer"
        hoverBackgroundColor="#c90000"
        hoverTransform="scale(1.05, 1.05)"
        transition="0.2s"
        onClick={onHeaderButtonClick}
      >
        {headerButtonText}
      </Button>
    </HeaderContainer>
  );
}

Header.defaultProps = {
  headerFontColor: 'black',
};

Header.propTypes = {
  headerFontColor: PropTypes.string,
  headerTitle: PropTypes.node.isRequired,
  headerButtonText: PropTypes.string.isRequired,
  onHeaderButtonClick: PropTypes.func.isRequired,
};

export default Header;
