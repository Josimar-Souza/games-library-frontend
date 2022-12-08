/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import pages from '../../pages';
import renderWithRouter from '../helpers/renderWithRouter';
import mockGames from '../mocks/mockGames';

describe('Testes da página de atualização', () => {
  const { games } = mockGames;
  describe('Verifica a existência dos elementos', () => {
    beforeEach(() => {
      renderWithRouter(<pages.UpdatePage />);
    });

    it('Uma título escrito "Atualize o jogo"', async () => {
      const pageTitle = await screen.findByRole('heading', { name: 'Atualize o jogo' });

      expect(pageTitle).toBeInTheDocument();
    });

    it('Um input para o título do game', async () => {
      const titleInput = await screen.findByDisplayValue(games[5].title);

      expect(titleInput).toBeInTheDocument();
    });

    it('Uma label escrito "Nome"', async () => {
      const titleLabel = await screen.findByLabelText('Nome');

      expect(titleLabel).toBeInTheDocument();
    });

    it('Um input para a data de lançamento do game', async () => {
      const releaseDateInput = await screen.findByDisplayValue(games[5].releaseYear);

      expect(releaseDateInput).toBeInTheDocument();
    });

    it('Uma label escrito "Data de lançamento"', async () => {
      const releaseDateLabel = await screen.findByLabelText('Data de lançamento');

      expect(releaseDateLabel).toBeInTheDocument();
    });
  });
});
