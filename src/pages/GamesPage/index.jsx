import React from 'react';
import { useNavigate } from 'react-router-dom';
import GamesPageSection from './gamesPageStyles';
import components from '../../components';
import { removeItem } from '../../helpers/localStorageManager';

function GamesPage() {
  const navigate = useNavigate();

  const { Header } = components;

  const onLogOutButtonClick = () => {
    removeItem('token');

    navigate('/');
  };

  return (
    <GamesPageSection>
      <Header
        headerFontColor="white"
        headerTitle="Games Library"
        headerButtonText="Deslogar"
        onHeaderButtonClick={onLogOutButtonClick}
      />
    </GamesPageSection>
  );
}

export default GamesPage;
