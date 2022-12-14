import React, { useEffect, useState, createRef } from 'react';
import components from '../../components';
import { getItem } from '../../helpers/localStorageManager';
import getArrayRandomItem from '../../helpers/getArrayRandomItem';
import GamesAPI from '../../api/gamesAPI';
import {
  GamesPageSection,
  CategoriesSearchContainer,
  SearchContainer,
  CategoriesContainer,
  GamesContainer,
  FiltersContainer,
  NoGameContainer,
} from './gamesPageStyles';

const apiURL = process.env.REACT_APP_API_URL;
export const gamesAPI = new GamesAPI(apiURL, 15000);

function GamesPage() {
  const categoriesContainerRef = createRef();

  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState({ games: [], hasFilters: false });
  const [categories, setCategories] = useState([]);
  const [heroGame, setHeroGame] = useState({});
  const [searchTerm, setSearchTerm] = useState({ value: '' });
  const [loading, setLoading] = useState(true);

  const {
    Header,
    Hero,
    Input,
    Button,
    GameCard,
    Loading,
    Title,
  } = components;

  useEffect(() => {
    const getAllGames = async () => {
      const gamesFounded = await gamesAPI.getAllGames(getItem('token'));
      const heroGameSelected = getArrayRandomItem(gamesFounded);

      setGames(gamesFounded);
      setLoading(false);
      setFilteredGames({ ...filteredGames, games: gamesFounded });
      setHeroGame(heroGameSelected);
    };

    const getAllCategories = async () => {
      const categoriesFounded = await gamesAPI.getAllCategories(getItem('token'));

      setCategories(categoriesFounded);
    };

    getAllGames();
    getAllCategories();
  }, []);

  const onCategoriesWheel = (e) => {
    if (e.deltaY > 0) {
      categoriesContainerRef.current.scrollLeft += 100;
    } else {
      categoriesContainerRef.current.scrollLeft -= 100;
    }
  };

  const onCategoryButtonClick = ({ target: { name } }) => {
    const gamesByCategory = games.filter(({ category }) => category === name);

    setFilteredGames({ games: gamesByCategory, hasFilters: true });
  };

  const onInputChange = ({ target: { value } }) => {
    setSearchTerm({ ...searchTerm, value });
  };

  const onSearchButtonClick = () => {
    const { value } = searchTerm;
    const searchedGames = games.filter(({ title }) => title
      .toLowerCase().includes(value.toLowerCase()));

    setFilteredGames({ games: searchedGames, hasFilters: true });
    setSearchTerm({ ...searchTerm, value: '' });
  };

  const onClearFiltersButtonClick = () => {
    setFilteredGames({ games, hasFilters: false });
  };

  const getClearFiltersButton = () => {
    if (filteredGames.hasFilters) {
      return (
        <Button
          width="15%"
          fontSize="1.3vw"
          borderRadius="8px"
          backgroundColor="#00b400"
          fontColor="white"
          hoverBackgroundColor="#00db00"
          transition="0.3s"
          hoverTransform="scale(1.05, 1.05)"
          hoverCursor="pointer"
          margin="0.8rem 0"
          mobileMargin="0.8rem 0"
          onClick={onClearFiltersButtonClick}
        >
          Limpar filtros
        </Button>
      );
    }

    return null;
  };

  const getGames = () => {
    if (games.length >= 1) {
      return (
        <GamesContainer>
          {
            filteredGames.games.map(({ _id, ...rest }, index) => (
              <GameCard
                game={{ _id, ...rest }}
                index={index}
                key={_id}
              />
            ))
          }
        </GamesContainer>
      );
    }

    return (
      <NoGameContainer>
        <Title
          width="100%"
          fontColor="white"
          textAlign="center"
          mobileFontSize="5vw"
        >
          Nenhum jogo encontrado! Por favor, adicione um jogo
        </Title>
      </NoGameContainer>
    );
  };

  const getFilters = () => {
    if (games.length >= 1) {
      return (
        <FiltersContainer>
          <CategoriesSearchContainer>
            <CategoriesContainer onWheel={onCategoriesWheel} ref={categoriesContainerRef}>
              {
                categories.map(({ _id, category }) => (
                  <Button
                    key={_id}
                    width="36%"
                    flexShrink="0"
                    backgroundColor="#8e8e8e"
                    fontSize="1vw"
                    mobileFontSize="3.8vw"
                    border="none"
                    hoverBackgroundColor="#d8d8d8"
                    hoverCursor="pointer"
                    hoverTransform="scale(1.05, 1.05)"
                    transition="0.2s"
                    margin="0 1rem"
                    mobileMargin="0 1rem"
                    borderRadius="15px"
                    onClick={onCategoryButtonClick}
                    name={category}
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
                mobileFontSize="5vw"
                inputBorderRadius="8px"
                containerWidth="60%"
                inputWidth="100%"
                mobileInputWidth="80%"
                onChange={onInputChange}
                value={searchTerm.value}
              />
              <Button
                width="35%"
                mobileWidth="45%"
                fontSize="1.3vw"
                mobileFontSize="5vw"
                borderRadius="8px"
                backgroundColor="#00b400"
                fontColor="white"
                hoverBackgroundColor="#00db00"
                transition="0.3s"
                hoverTransform="scale(1.05, 1.05)"
                hoverCursor="pointer"
                onClick={onSearchButtonClick}
              >
                Pesquisar
              </Button>
            </SearchContainer>
          </CategoriesSearchContainer>
          { getClearFiltersButton() }
        </FiltersContainer>
      );
    }

    return null;
  };

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <GamesPageSection>
      <Header
        headerFontColor="white"
        headerTitle="Games Library"
      />
      <Hero
        game={heroGame}
      />
      { getFilters() }
      { getGames() }
    </GamesPageSection>
  );
}

export default GamesPage;
