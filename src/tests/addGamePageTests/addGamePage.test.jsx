/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';

describe('Testes da página para adicionar um novo game', () => {
  describe('Verifica a existência dos elementos na página', () => {
    beforeEach(() => {
      renderWithRouter(<pages.AddGamePage />);
    });

    it('Verifica se existe um input para o título do game', async () => {
      const titleInput = await screen.findByPlaceholderText('Digite o nome do jogo');

      expect(titleInput).toBeInTheDocument();
    });

    it('Verifica se existe um input para a data de lançamento do game', async () => {
      const releaseYearInput = await screen.findByPlaceholderText('Digite a data de lançamento do jogo no formato dd/mm/aaaa');

      expect(releaseYearInput).toBeInTheDocument();
    });

    it('Verifica se existe um text area para a sinopse do game', async () => {
      const sinopseTextArea = await screen.findByPlaceholderText('Digite a sinopse do jogo');

      expect(sinopseTextArea).toBeInTheDocument();
    });

    it('Verifica se existe um input para a desenvolvedora do game', async () => {
      const developerInput = await screen.findByPlaceholderText('Digite a desenvolvedora do jogo');

      expect(developerInput).toBeInTheDocument();
    });

    it('Verifica se existe um input para a publicadora do game', async () => {
      const publisherInput = await screen.findByPlaceholderText('Digite a publicadora do jogo');

      expect(publisherInput).toBeInTheDocument();
    });
  });
});
