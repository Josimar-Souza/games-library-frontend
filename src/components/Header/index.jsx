import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Title from '../Title';
import Button from '../Button';
import Logo from '../../images/Logo.jpg';
import SideMenuButton from '../SideMenuButton';
import {
  HeaderContainer,
  HeaderLogo,
  SideMenuContainer,
} from './headerStyles';

function Header(props) {
  const {
    headerFontColor,
    headerTitle,
    onHeaderButtonClick,
  } = props;

  const navigate = useNavigate();
  const [sideMenu, setSideMenu] = useState({ show: false, rightPosition: '-200px' });

  const getShowSideMenu = (checked) => {
    if (checked) {
      setSideMenu({ ...sideMenu, rightPosition: '10px' });
    } else {
      setSideMenu({ ...sideMenu, rightPosition: '-200px' });
    }
  };

  const onSideMenuButtonClick = ({ target: { checked } }) => {
    setSideMenu({ ...sideMenu, show: checked });

    getShowSideMenu(checked);
  };

  const onAddGameButtonClick = () => {
    navigate('/addgame');
  };

  return (
    <HeaderContainer>
      <HeaderLogo src={Logo} alt="Logo da página no header" />
      <Title
        fontColor={headerFontColor}
        textAlign="center"
        textShadow="3px 3px 4px black"
      >
        {headerTitle}
      </Title>
      <SideMenuButton
        onChange={onSideMenuButtonClick}
      />
      <SideMenuContainer
        rightPosition={sideMenu.rightPosition}
        data-testid="header-side-menu"
      >
        <Button
          width="100%"
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
          textShadow="1px 1px 2px black"
        >
          Deslogar
        </Button>
        <Button
          width="100%"
          borderRadius="15px"
          fontSize="1.5vw"
          border="none"
          backgroundColor="#00a502"
          fontColor="white"
          hoverCursor="pointer"
          hoverBackgroundColor="#007700"
          hoverTransform="scale(1.05, 1.05)"
          transition="0.2s"
          textShadow="1px 1px 2px black"
          onClick={onAddGameButtonClick}
        >
          Adicionar jogo
        </Button>
      </SideMenuContainer>
    </HeaderContainer>
  );
}

Header.defaultProps = {
  headerFontColor: 'black',
};

Header.propTypes = {
  headerFontColor: PropTypes.string,
  headerTitle: PropTypes.node.isRequired,
  onHeaderButtonClick: PropTypes.func.isRequired,
};

export default Header;
