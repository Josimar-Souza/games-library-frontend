import React from 'react';
import GamesPageSection from './gamesPageStyles';
import components from '../../components';

function GamesPage() {
  const { Header } = components;
  return (
    <GamesPageSection>
      <Header
        headerFontColor="white"
        headerTitle="Games Library"
        headerButtonText="Deslogar"
      />
    </GamesPageSection>
  );
}

export default GamesPage;