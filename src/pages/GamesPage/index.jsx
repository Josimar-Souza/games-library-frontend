import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GamesPageSection from './gamesPageStyles';
import components from '../../components';
import { removeItem, getItem } from '../../helpers/localStorageManager';
import GamesAPI from '../../api/gamesAPI';

const apiURL = process.env.REACT_APP_API_URL;
const gamesAPI = new GamesAPI(apiURL, 15000);

function GamesPage() {
  const navigate = useNavigate();

  const [games, setGames] = useState([]);
  const { Header } = components;

  useEffect(() => {
    const getAllGames = async () => {
      const gamesFounded = await gamesAPI.getAllGames(getItem('token'));

      setGames(gamesFounded);
    };

    getAllGames();
  }, []);

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
