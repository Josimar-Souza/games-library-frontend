/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';

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
  });
});
