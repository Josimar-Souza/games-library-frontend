import React, { useEffect, useState, createRef } from 'react';
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
  GamesContainer,
} from './gamesPageStyles';

const apiURL = process.env.REACT_APP_API_URL;
export const gamesAPI = new GamesAPI(apiURL, 15000);

function GamesPage() {
  const navigate = useNavigate();
  const categoriesContainerRef = createRef();

  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [heroGame, setHeroGame] = useState({});

  const {
    Header,
    Hero,
    Input,
    Button,
    GameCard,
  } = components;

  useEffect(() => {
    const getAllGames = async () => {
      const gamesFounded = await gamesAPI.getAllGames(getItem('token'));
      const heroGameSelected = getArrayRandomItem(gamesFounded);

      setGames(gamesFounded);
      setHeroGame(heroGameSelected);
    };

    const getAllCategories = async () => {
      const categoriesFounded = await gamesAPI.getAllCategories(getItem('token'));

      setCategories(categoriesFounded);
    };

    getAllGames();
    getAllCategories();
  }, []);

  const onLogOutButtonClick = () => {
    removeItem('token');

    navigate('/');
  };

  const onCategoriesWheel = (e) => {
    if (e.deltaY > 0) {
      categoriesContainerRef.current.scrollLeft += 100;
    } else {
      categoriesContainerRef.current.scrollLeft -= 100;
    }
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
        <CategoriesContainer onWheel={onCategoriesWheel} ref={categoriesContainerRef}>
          {
            categories.map(({ _id, category }) => (
              <Button
                key={_id}
                width="36%"
                flexShrink="0"
                backgroundColor="#8e8e8e"
                fontSize="1.5vw"
                border="none"
                hoverBackgroundColor="#d8d8d8"
                hoverCursor="pointer"
                hoverTransform="scale(1.05, 1.05)"
                transition="0.2s"
                margin="0 1rem"
                borderRadius="15px"
              >
                {category}
              </Button>
            ))
          }
        </CategoriesContainer>
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
      <GamesContainer>
        {
          games.map(({ _id, ...rest }, index) => (
            <GameCard
              game={{ _id, ...rest }}
              index={index}
              key={_id}
            />
          ))
        }
      </GamesContainer>
    </GamesPageSection>
  );
}

export default GamesPage;
