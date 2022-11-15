/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import mockCategories from '../mocks/mockCategories';
import mockGames from '../mocks/mockGames';

const testIds = {
  gameCardImage: 'game-card-image',
  gameCardTitle: 'game-card-title',
  gameCardDetailsButton: 'game-card-detail-button',
};

describe('Testes da página principal de games', () => {
  describe('Verifica a existência dos elementos', () => {
    beforeEach(() => {
      renderWithRouter(<pages.GamesPage />);
    });

    it('A logo do site', async () => {
      const pageLogo = await screen.findByAltText('Logo da página no header');

      expect(pageLogo).toBeInTheDocument();
    });

    it('Um título escrito "Games Library"', async () => {
      const headerTitle = await screen.findByRole('heading', { name: 'Games Library' });

      expect(headerTitle).toBeInTheDocument();
    });

    it('Um botão para deslogar da aplicação escrito "Deslogar"', async () => {
      const signOutButton = await screen.findByRole('button', { name: 'Deslogar' });

      expect(signOutButton).toBeInTheDocument();
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
