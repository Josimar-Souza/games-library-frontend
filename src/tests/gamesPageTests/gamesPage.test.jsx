/* eslint-disable no-import-assign */
/* eslint-disable no-undef */
import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import mockCategories from '../mocks/mockCategories';
import mockGames from '../mocks/mockGames';
import Logo from '../../images/Logo.jpg';
import { gamesAPI } from '../../pages/GamesPage';
import * as getArrayRandomItem from '../../helpers/getArrayRandomItem';

const testIds = {
  gameCardImage: 'game-card-image',
  gameCardTitle: 'game-card-title',
  gameCardDetailsButton: 'game-card-details-button',
  gameHeroDetailsButton: 'game-hero-details-button',
  gameHero: 'game-hero-container',
  gameHeroTitle: 'game-hero-title',
  gameHeroMetascore: 'game-hero-metascore',
  gameHeroUserscore: 'game-hero-userscore',
  gameHeroDate: 'game-hero-date',
  headerSideMenu: 'header-side-menu',
  sideMenuButton: 'side-menu-button',
};

describe('Testes da página principal de games', () => {
  describe('Verifica a existência dos elementos', () => {
    beforeEach(async () => {
      jest.spyOn(gamesAPI, 'getAllGames').mockResolvedValue(mockGames.games);
      jest.spyOn(gamesAPI, 'getAllCategories').mockResolvedValue(mockCategories);
      getArrayRandomItem.default = jest.fn().mockReturnValue(mockGames.games[0]);

      await act(async () => {
        renderWithRouter(<pages.GamesPage />);
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('Todos os elementos do header', () => {
      it('A logo do site', async () => {
        const pageLogo = await screen.findByAltText('Logo da página no header');

        expect(pageLogo).toBeInTheDocument();
        expect(pageLogo).toHaveAttribute('src', Logo);
      });

      it('Um título escrito "Games Library"', async () => {
        const headerTitle = await screen.findByRole('heading', { name: 'Games Library' });

        expect(headerTitle).toBeInTheDocument();
      });

      it('Um botão para deslogar da aplicação escrito "Deslogar"', async () => {
        const signOutButton = await screen.findByRole('button', { name: 'Deslogar' });

        expect(signOutButton).toBeInTheDocument();
      });

      it('Um botão para adicionar um novo jogo escrito "Adicionar jogo"', async () => {
        const addGameButton = await screen.findByRole('button', { name: 'Adicionar jogo' });

        expect(addGameButton).toBeInTheDocument();
      });
    });

    describe('Todas as informações do hero, com valores corretos', () => {
      it('Hero container com background correto', async () => {
        const { games } = mockGames;

        const {
          gameHero,
        } = testIds;

        const gameHeroElement = await screen.findByTestId(gameHero);

        expect(gameHeroElement).toHaveStyle(`
        background-image: url(${games[0].backdrop});
      `);
      });

      it('O título do game correto', async () => {
        const { games } = mockGames;

        const {
          gameHeroTitle,
        } = testIds;

        const gameHeroTitleElement = await screen.findByTestId(gameHeroTitle);

        expect(gameHeroTitleElement.textContent).toBe(games[0].title);
      });

      it('A nota metascore do site Metacritic', async () => {
        const { games } = mockGames;

        const {
          gameHeroMetascore,
        } = testIds;

        const gameHeroMetascoreElement = await screen.findByTestId(gameHeroMetascore);

        expect(gameHeroMetascoreElement.textContent).toBe(`Metascore: ${games[0].metacritic.metascore}`);
      });

      it('A nota userscore do site Metacritic', async () => {
        const { games } = mockGames;

        const {
          gameHeroUserscore,
        } = testIds;

        const gameHeroUserscoreElement = await screen.findByTestId(gameHeroUserscore);

        expect(gameHeroUserscoreElement.textContent).toBe(`Userscore: ${games[0].metacritic.userscore}`);
      });

      it('A data correta do game', async () => {
        const { games } = mockGames;

        const {
          gameHeroDate,
        } = testIds;

        const gameHeroDateElement = await screen.findByTestId(gameHeroDate);

        expect(gameHeroDateElement.textContent).toBe(`Lançamento: ${games[0].releaseYear}`);
      });

      it('Uma sinopse curta do game', async () => {
        const expectedText = mockGames.games[0].sinopse.split('.')[0];

        const sinopseElement = await screen.findByText(`${expectedText}.`);

        expect(sinopseElement).toBeInTheDocument();
      });

      it('Um botão para detalhes do game', async () => {
        const gameHeroDetailsButtonElement = await screen.findByTestId(
          testIds.gameHeroDetailsButton,
        );

        expect(gameHeroDetailsButtonElement).toBeInTheDocument();
      });
    });

    describe('Todos os elementos do filtro', () => {
      it('Um input para pesquisa por nome', async () => {
        const searchInput = await screen.findByPlaceholderText('Digite o jogo para pesquisar');

        expect(searchInput).toBeInTheDocument();
      });

      it('Um botão escrito "Pesquisar"', async () => {
        const searchButton = await screen.findByRole('button', { name: 'Pesquisar' });

        expect(searchButton).toBeInTheDocument();
      });

      it('Todas as categorias com as informações corretas', async () => {
        const categoriesPromises = [];

        mockCategories.forEach(({ category }) => {
          const categoryElement = screen.findByText(category);

          categoriesPromises.push(categoryElement);
        });

        const categories = await Promise.all(categoriesPromises);

        categories.forEach((category, index) => {
          expect(category.textContent).toBe(mockCategories[index].category);
        });
      });

      it('Verifica que no início, o botão "Limpar filtros não existe na página"', async () => {
        const clearFiltersButton = screen.queryByRole('button', { name: 'Limpar filtros' });

        expect(clearFiltersButton).toBeNull();
      });
    });

    describe('Todas as informações corretas dos cards de games', () => {
      it('Todas as images de capa', async () => {
        const { games } = mockGames;

        const gamesImagesPromises = [];

        games.forEach((_title, index) => {
          const gameImageElement = screen.findByTestId(`${testIds.gameCardImage}-${index}`);
          gamesImagesPromises.push(gameImageElement);
        });

        const gamesImages = await Promise.all(gamesImagesPromises);

        for (let index = 0; index < games.length; index += 1) {
          expect(gamesImages[index]).toHaveAttribute('src', games[index].image);
        }
      });

      it('Todos os títulos', async () => {
        const { games } = mockGames;

        const gamesTitlesPromises = [];

        games.forEach((_title, index) => {
          const gameTitleElement = screen.findByTestId(`${testIds.gameCardTitle}-${index}`);
          gamesTitlesPromises.push(gameTitleElement);
        });

        const gamesTitles = await Promise.all(gamesTitlesPromises);

        for (let index = 0; index < games.length; index += 1) {
          expect(gamesTitles[index].textContent).toBe(games[index].title);
        }
      });

      it('Todos os botões de detalhes', async () => {
        const { games } = mockGames;

        const gamesDetailsButtonsPromises = [];

        games.forEach((_title, index) => {
          const gameDetailsButtonElement = screen.findByTestId(`${testIds.gameCardDetailsButton}-${index}`);
          gamesDetailsButtonsPromises.push(gameDetailsButtonElement);
        });

        const gamesDetailsButtons = await Promise.all(gamesDetailsButtonsPromises);

        for (let index = 0; index < games.length; index += 1) {
          expect(gamesDetailsButtons[index]).toBeInTheDocument();
        }
      });
    });
  });

  describe('Verifica o comportamento da página', () => {
    beforeEach(async () => {
      jest.spyOn(gamesAPI, 'getAllGames').mockResolvedValue(mockGames.games);
      jest.spyOn(gamesAPI, 'getAllCategories').mockResolvedValue(mockCategories);
      getArrayRandomItem.default = jest.fn().mockReturnValue(mockGames.games[0]);

      await act(async () => {
        renderWithRouter(<pages.GamesPage />);
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Ao marcar o input de menu de 3 linhas, o side menu aparece e ao desmarcar, desaparece', async () => {
      const sideMenuInput = await screen.findByTestId(testIds.sideMenuButton);
      const headerSideMenu = await screen.findByTestId(testIds.headerSideMenu);

      userEvent.click(sideMenuInput);

      expect(headerSideMenu).toHaveStyle(`
        right: 10px;
      `);

      userEvent.click(sideMenuInput);

      expect(headerSideMenu).toHaveStyle(`
        right: -200px;
      `);
    });

    it('Ao clicar no botão "Deslogar", o usuário é deslogado', async () => {
      localStorage.setItem('token', 'LkdjawoDAOnonF54DliDWniogCndo4Djgnia');

      const logOutButton = await screen.findByRole('button', { name: 'Deslogar' });

      userEvent.click(logOutButton);

      const token = localStorage.getItem('token');

      expect(token).toBe(null);

      const { location: { pathname } } = window;

      expect(pathname).toBe('/');
    });

    it('Ao clicar no botão "Adicionar jogo", a página é redirecionada', async () => {
      const addGameButton = await screen.findByRole('button', { name: 'Adicionar jogo' });

      userEvent.click(addGameButton);

      const { location: { pathname } } = window;

      expect(pathname).toBe('/addgame');
    });

    it('Ao clicar no botão "Ver detalhes" do hero, a página é redirecionada para a de detalhes desse game', async () => {
      const heroDetailsButton = await screen.findByTestId(testIds.gameHeroDetailsButton);

      userEvent.click(heroDetailsButton);

      const { _id } = mockGames.games[0];
      const { location: { pathname } } = window;

      expect(pathname).toBe(`/details/${_id}`);
    });

    it('Ao clicar em uma categoria, só aparecem jogos dessa categoria', async () => {
      const actionCategoryButton = await screen.findByRole('button', { name: 'Ação' });

      userEvent.click(actionCategoryButton);

      const expectedResult = mockGames.games.filter((game) => game.category === 'Ação');
      const gameTitlePromises = [];

      expectedResult.forEach((_result, index) => {
        const gameTitleElement = screen.findByTestId(`${testIds.gameCardTitle}-${index}`);

        gameTitlePromises.push(gameTitleElement);
      });

      const gameTitleElements = await Promise.all(gameTitlePromises);

      gameTitleElements.forEach((gameTitle, index) => {
        expect(gameTitle.textContent).toBe(expectedResult[index].title);
      });
    });

    it('Ao pesquisar um game pelo título, só aparece o jogo pesquisado', async () => {
      const searchInput = await screen.findByPlaceholderText('Digite o jogo para pesquisar');
      const searchButton = await screen.findByRole('button', { name: 'Pesquisar' });

      userEvent.type(searchInput, 'teste game 7');
      userEvent.click(searchButton);

      const gameTitleElement = await screen.findByTestId(`${testIds.gameCardTitle}-0`);

      expect(gameTitleElement.textContent).toBe('Teste game 7');
    });

    it('Ao adicionar um filtro, o botão "Limpar filtros aparece na página"', async () => {
      const actionCategoryButton = await screen.findByRole('button', { name: 'Ação' });

      userEvent.click(actionCategoryButton);

      const clearFiltersButton = await screen.findByRole('button', { name: 'Limpar filtros' });

      expect(clearFiltersButton).toBeDefined();
    });

    it('Ao clicar no botão "Limpar filtros", todos os jogos aparecem e o botão desaparece', async () => {
      const actionCategoryButton = await screen.findByRole('button', { name: 'Ação' });

      userEvent.click(actionCategoryButton);

      let clearFiltersButton = await screen.findByRole('button', { name: 'Limpar filtros' });

      userEvent.click(clearFiltersButton);

      const { games } = mockGames;

      const gamesImagesPromises = [];

      games.forEach((_game, index) => {
        const gameImage = screen.findByTestId(`${testIds.gameCardImage}-${index}`);
        gamesImagesPromises.push(gameImage);
      });

      const gamesImages = await Promise.all(gamesImagesPromises);
      clearFiltersButton = screen.queryByRole('button', { name: 'Limpar filtros' });

      expect(gamesImages.length).toBe(games.length);
      expect(clearFiltersButton).toBeNull();
    });

    it('Ao clicar no botão "Ver detalhes" do card de game, a página é redirecionada para a página de detalhes desse game', async () => {
      const gameCardDetailsButton = await screen.findByTestId(`${testIds.gameCardDetailsButton}-${2}`);

      userEvent.click(gameCardDetailsButton);

      const { _id } = mockGames.games[2];
      const { location: { pathname } } = window;

      expect(pathname).toBe(`/details/${_id}`);
    });
  });
});
