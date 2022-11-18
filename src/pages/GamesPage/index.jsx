import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GamesPageSection from './gamesPageStyles';
import components from '../../components';
import { removeItem, getItem } from '../../helpers/localStorageManager';
import getArrayRandomItem from '../../helpers/getArrayRandomItem';
import GamesAPI from '../../api/gamesAPI';

const apiURL = process.env.REACT_APP_API_URL;
export const gamesAPI = new GamesAPI(apiURL, 15000);

function GamesPage() {
  const navigate = useNavigate();

  const [games, setGames] = useState([]);
  const [heroGame, setHeroGame] = useState({});

  const {
    Header,
    Hero,
  } = components;

  useEffect(() => {
    const getAllGames = async () => {
      const gamesFounded = await gamesAPI.getAllGames(getItem('token'));
      const heroGameSelected = getArrayRandomItem(gamesFounded);

      setGames(gamesFounded);
      setHeroGame(heroGameSelected);
    };

    getAllGames();
  }, []);

  const onLogOutButtonClick = () => {
    removeItem('token');

    navigate('/');
  };

  if (games.length === 0) {
    return null;
  }

  return (
    <GamesPageSection>
      <Header
        headerFontColor="white"
        headerTitle="Games Library"
        headerButtonText="Deslogar"
        onHeaderButtonClick={onLogOutButtonClick}
      />
      <Hero
        game={heroGame}
      />
    </GamesPageSection>
  );
}

export default GamesPage;
