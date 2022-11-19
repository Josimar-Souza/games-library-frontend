import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import components from '../../components';
import { removeItem, getItem } from '../../helpers/localStorageManager';
import getArrayRandomItem from '../../helpers/getArrayRandomItem';
import GamesAPI from '../../api/gamesAPI';
import {
  GamesPageSection,
  CategoriesSearchContainer,
  SearchContainer,
  CategoriesContainer,
} from './gamesPageStyles';

const apiURL = process.env.REACT_APP_API_URL;
export const gamesAPI = new GamesAPI(apiURL, 15000);

function GamesPage() {
  const navigate = useNavigate();

  const [games, setGames] = useState([]);
  const [heroGame, setHeroGame] = useState({});

  const {
    Header,
    Hero,
    Input,
    Button,
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
      <CategoriesSearchContainer>
        <CategoriesContainer />
        <SearchContainer>
          <Input
            id="search-term"
            placeholder="Digite o jogo para pesquisar"
            fontSize="1.3vw"
            inputBorderRadius="8px"
            containerWidth="60%"
            inputWidth="100%"
          />
          <Button
            width="35%"
            fontSize="1.3vw"
            borderRadius="8px"
            backgroundColor="#00b400"
            fontColor="white"
            hoverBackgroundColor="#00db00"
            transition="0.3s"
            hoverTransform="scale(1.05, 1.05)"
            hoverCursor="pointer"
          >
            Pesquisar
          </Button>
        </SearchContainer>
      </CategoriesSearchContainer>
    </GamesPageSection>
  );
}

export default GamesPage;
