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

    it('Verifica se existe um input para informar a quantidade de plataformas do game', async () => {
      const platformCountInput = await screen.findByPlaceholderText('Digite a quantidade de plataformas para qual o jogo foi lançado');

      expect(platformCountInput).toBeInTheDocument();
    });

    it('Verifica se todos os inputs para as plataformas existem n página', async () => {
      const platformsInputs = await screen.findAllByPlaceholderText('Digite a plataforma');

      expect(platformsInputs.length).toBe(5);
    });

    it('Verifica se existe um input para a url do trailer do game', async () => {
      const urlInput = await screen.findByPlaceholderText('Digite a url do trailer do jogo no Youtube');

      expect(urlInput).toBeInTheDocument();
    });

    it('Verifica se existe um input para a nota "metascore" do site Metacriic', async () => {
      const metascoreInput = await screen.findByPlaceholderText('Digite a nota "metascore" do Metacriic');

      expect(metascoreInput).toBeInTheDocument();
    });

    it('Verifica se existe um input para a nota "userscore" do site Metacriic', async () => {
      const userscoreInput = await screen.findByPlaceholderText('Digite a nota "userscore" do site Metacriic');

      expect(userscoreInput).toBeInTheDocument();
    });

    it('Verifica se existe um input para a imagem do game', async () => {
      const imageInput = await screen.findByPlaceholderText('Digite a url da imagem do game');

      expect(imageInput).toBeInTheDocument();
    });

    it('Verifica se existe um input para a imagem de backdrop do game', async () => {
      const backdropImageInput = await screen.findByPlaceholderText('Digite a url da imagem de backdrop do game');

      expect(backdropImageInput).toBeInTheDocument();
    });
  });
});
