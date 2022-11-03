/* eslint-disable no-undef */
import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { gamesAPI } from '../../pages/AddGamePage';
import mockCategories from '../mocks/mockCategories';

describe('Testes da página para adicionar um novo game', () => {
  describe('Verifica a existência dos elementos na página', () => {
    beforeEach(async () => {
      jest.spyOn(gamesAPI, 'getAllCategories').mockResolvedValue(mockCategories);

      await act(async () => {
        renderWithRouter(<pages.AddGamePage />);
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Verifica se existe um título escriot "Adicione um novo jogo"', async () => {
      const pageTitle = await screen.findByRole('heading', { name: 'Adicione um novo jogo' });

      expect(pageTitle).toBeInTheDocument();
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

    it('Verifica se existe um botão para adicionar os inputs para as pataformas', async () => {
      const addPlatformsButton = await screen.findByRole('button', { name: 'Adicionar inputs para plataformas' });

      expect(addPlatformsButton).toBeInTheDocument();
    });

    it('Verifica se todos os inputs para as plataformas existem n página', async () => {
      const platformCountInput = await screen.findByPlaceholderText('Digite a quantidade de plataformas para qual o jogo foi lançado');
      const addPlatformsButton = await screen.findByRole('button', { name: 'Adicionar inputs para plataformas' });

      userEvent.type(platformCountInput, '5');
      userEvent.click(addPlatformsButton);

      const platformsInputs = await screen.findAllByPlaceholderText('Digite a plataforma');

      expect(platformsInputs.length).toBe(5);
    });

    it('Verifica se existe um input para a url do trailer do game', async () => {
      const urlInput = await screen.findByPlaceholderText('Digite a url do trailer do jogo no Youtube');

      expect(urlInput).toBeInTheDocument();
    });

    it('Verifica se existe um select para as categorias', async () => {
      const categorySelect = await screen.findByRole('combobox');

      expect(categorySelect).toBeInTheDocument();
    });

    it('Verifica se todas as categorias aparecem como opções do dropdown', async () => {
      const categoriesOptionsPromises = [];
      mockCategories.forEach((category, index) => {
        const categoryOption = screen.findByTestId(`category-option-${index}`);

        categoriesOptionsPromises.push(categoryOption);
      });

      const categoriesOptions = await Promise.all(categoriesOptionsPromises);

      categoriesOptions.forEach((category, index) => {
        expect(category.textContent).toBe(mockCategories[index].category);
      });
    });

    it('Verifica se existe um input para a nota "metascore" do site Metacriic', async () => {
      const metascoreInput = await screen.findByPlaceholderText('Digite a nota \'metascore\' do site Metacritic');

      expect(metascoreInput).toBeInTheDocument();
    });

    it('Verifica se existe um input para a nota "userscore" do site Metacriic', async () => {
      const userscoreInput = await screen.findByPlaceholderText('Digite a nota \'userscore\' do site Metacritic');

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

    it('Verifica se existe um botão para adicionar o jogo', async () => {
      const addGameButton = await screen.findByRole('button', { name: 'Adicionar jogo' });

      expect(addGameButton).toBeInTheDocument();
    });
  });
});
