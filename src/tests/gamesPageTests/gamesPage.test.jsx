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
  gameCardDetailsButton: 'game-card-details-button',
  gameHeroDetailsButton: 'game-hero-details-button',
  gameHero: 'game-hero-container',
  gameHeroTitle: 'game-hero-title',
  gameHeroMetascore: 'game-hero-metascore',
  gameHeroUserscore: 'game-hero-userscore',
  gameHeroDate: 'game-hero-date',
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

      it('Um botão para detalhes do game', async () => {
        const gameHeroDetailsButtonElement = await screen.findByTestId(
          testIds.gameHeroDetailsButton,
        );

        expect(gameHeroDetailsButtonElement).toBeInTheDocument();
      });
    });

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
});
