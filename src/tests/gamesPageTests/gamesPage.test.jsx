/* eslint-disable no-import-assign */
/* eslint-disable no-undef */
import React from 'react';
import { screen, act } from '@testing-library/react';
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
  gameCardDetailsButton: 'game-card-detail-button',
  gameHero: 'game-hero-container',
  gameHeroTitle: 'game-hero-title',
  gameHeroSinopse: 'game-hero-sinopse',
  gameHeroMetascore: 'game-hero-metascore',
  gameHeroUserscore: 'game-hero-userscore',
};

describe('Testes da página principal de games', () => {
  describe('Verifica a existência dos elementos', () => {
    beforeEach(async () => {
      jest.spyOn(gamesAPI, 'getAllGames').mockResolvedValue(mockGames.games);
      getArrayRandomItem.default = jest.fn().mockReturnValue(mockGames.games[0]);

      await act(async () => {
        renderWithRouter(<pages.GamesPage />);
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

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

    it('Todas as informações do hero, com valores corretos', async () => {
      const { games } = mockGames;

      const {
        gameHero,
        gameHeroTitle,
        gameHeroMetascore,
        gameHeroUserscore,
      } = testIds;

      const gameHeroElement = await screen.findByTestId(gameHero);
      const gameHeroTitleElement = await screen.findByTestId(gameHeroTitle);
      const gameHeroMetascoreElement = await screen.findByTestId(gameHeroMetascore);
      const gameHeroUserscoreElement = await screen.findByTestId(gameHeroUserscore);
      const gameHeroDetailsButtonElement = await screen.findByRole('button', { name: 'Ver detalhes' });

      expect(gameHeroElement).toHaveStyle(`
        background-image: url(${game.backdrop});
      `);

      expect(gameHeroTitleElement.textContent).toBe(games[0].title);
      expect(gameHeroMetascoreElement.textContent).toBe(games[0].metacritic.metascore);
      expect(gameHeroUserscoreElement.textContent).toBe(games[0].metacritic.userscore);
      expect(gameHeroDetailsButtonElement).toBeInTheDocument();
    });

    it('Um input para pesquisa por nome', async () => {
      const searchInput = await screen.findByPlaceholderText('Digite o nome do jogo para pesquisar');

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

    it('Todos os cards de games com as informações corretas', async () => {
      const { games } = mockGames;
      const gamesImagesPromises = [];
      const gamesTitlesPromises = [];
      const gamesDetailsButtonsPromises = [];

      games.forEach((_title, index) => {
        const gameImageElement = screen.findByTestId(`${testIds.gameCardImage}-${index}`);
        const gameTitleElement = screen.findByTestId(`${testIds.gameCardTitle}-${index}`);
        const gameDetailsButtonElement = screen.findByTestId(`${testIds.gameCardDetailsButton}-${index}`);

        gamesImagesPromises.push(gameImageElement);
        gamesTitlesPromises.push(gameTitleElement);
        gamesDetailsButtonsPromises.push(gameDetailsButtonElement);
      });

      const gamesImages = await Promise.all(gamesImagesPromises);
      const gamesTitles = await Promise.all(gamesTitlesPromises);
      const gamesDetailsButtons = await Promise.all(gamesDetailsButtonsPromises);

      for (let index = 0; index < games.length; index += 1) {
        expect(gamesImages[index]).toHaveAttribute('src', games[index].image);
        expect(gamesTitles[index].textContent).toBe(games[index].title);
        expect(gamesDetailsButtons[index]).toBeInTheDocument();
      }
    });
  });
});
